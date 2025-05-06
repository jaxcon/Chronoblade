import { getTotalValue, initPlayer, initEnemies, initTurns, getAttackDamage, generateBattleItems, getStatsOverAll } from '../utils/battleUtils';
import { useBattle } from '../context/BattleContext';
import { useEffect, useRef } from 'react';
import { playSoundByName } from '../utils/soundManager';
import { usePlayer } from '../context/PlayerContext';
import { getLvl } from '../utils/championDataHandle';

export const usePlay = () => {
    const { selectedAction } = useBattle();
    const selectedActionRef = useRef(selectedAction);
    const { volume } = usePlayer();

    useEffect(() => {
        selectedActionRef.current = selectedAction;
    }, [selectedAction]);

    const delayNextTurn = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems, delay = 1000) => {
        setTimeout(() => {
            iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
        }, delay);
    };

    const updateCooldowns = (currentCooldowns) => {
        if (!currentCooldowns?.length) return [];

        return currentCooldowns
            .map(cooldown => ({
                ...cooldown,
                rounds: cooldown.rounds - 1
            }))
            .filter(cooldown => cooldown.rounds > 0);
    };

    const regenHp = (player) => {
        const isNeedingRegen = (player.currentHealth < player.maxHealth && player.stats.hpRegen > 0);
        if (!isNeedingRegen)
            return { playerAfterRegen: player, isNeedingRegen: false };

        const regenValue = player.currentHealth + player.stats.hpRegen <= player.maxHealth
            ? player.stats.hpRegen
            : player.maxHealth - player.currentHealth;
        const newPlayer = { ...player, currentHealth: player.currentHealth + regenValue };

        return { playerAfterRegen: newPlayer, isNeedingRegen: true };
    }

    const isBuffActive = (cooldowns, skillName, activeRounds, overAllRounds) => {
        if (!cooldowns?.length) return false;
        const effect = cooldowns.find(c => c.skill === skillName);
        return (effect && effect.rounds > (overAllRounds - activeRounds));
    }

    const doMassiveAttack = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems) => {
        const { playerAfterRegen } = regenHp(player);

        let newEnemies = [];
        let newQueue = [...turns.queue];
        for (let i = 0; i < enemies.length; i++) {

            let { attackDamage, isCritical } = getAttackDamage(player.stats.minAttack, player.stats.maxAttack, player.stats.criticalChance, enemies[i].stats.defense);

            if (isBuffActive(turns.cooldowns, 'titan', 2, 2))
                attackDamage *= 2;

            if (isBuffActive(turns.cooldowns, 'adrenaline', 3, 3))
                attackDamage *= 1.3;

            if (isBuffActive(turns.cooldowns, 'venomBlade', 3, 5))
                attackDamage *= 1.35;

            attackDamage = Math.floor(attackDamage);

            if (enemies[i].currentHealth - attackDamage <= 0) {
                newQueue = newQueue.filter(unit => unit.id !== enemies[i].id)
                handleEnemyKill(enemies[i].value);

                addAttackEffect({
                    unitId: player.id,
                    killedAvatar: enemies[i].avatar,
                    value: attackDamage,
                    type: 'kill'
                });

            } else {
                newEnemies.push({ ...enemies[i], currentHealth: enemies[i].currentHealth - attackDamage });

                addAttackEffect({
                    unitId: enemies[i].id,
                    value: attackDamage,
                    isCritical: isCritical
                });
            }
        }

        setEnemies(newEnemies);

        const newTurns = ({
            queue: newQueue,
            turnOrder: (turns.turnOrder + 1) % newQueue.length,
            cooldowns: updateCooldowns(turns.cooldowns)
        });
        setTurns(newTurns);
        playSoundByName('critical', volume);
        console.log(newEnemies)
        delayNextTurn(newEnemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
    }

    const doAttack = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems) => {
        const { playerAfterRegen } = regenHp(player);

        const randomTarget = Math.floor(Math.random() * (enemies.length));

        const defense = isBuffActive(turns.cooldowns, 'piercingHowl', 3, 3)
            ? Math.floor(enemies[randomTarget].stats.defense * 0.85)
            : enemies[randomTarget].stats.defense;
        let { attackDamage, isCritical } = getAttackDamage(player.stats.minAttack, player.stats.maxAttack, player.stats.criticalChance, defense);

        if (isBuffActive(turns.cooldowns, 'rageStrike', 2, 4))
            attackDamage *= 1.3;
        if (isBuffActive(turns.cooldowns, 'berserk', 5, 5))
            attackDamage *= 1.5;

        if (isBuffActive(turns.cooldowns, 'shadowStrike', 1, 3))
            attackDamage *= 2;

        if (isBuffActive(turns.cooldowns, 'titan', 2, 2))
            attackDamage *= 2;

        if (isBuffActive(turns.cooldowns, 'adrenaline', 3, 3))
            attackDamage *= 1.3;

        if (isBuffActive(turns.cooldowns, 'venomBlade', 3, 5))
            attackDamage *= 1.35;

        attackDamage = Math.floor(attackDamage);

        let lifeStealed = Math.floor(attackDamage / 100 * player.stats.lifeSteal);

        if (isBuffActive(turns.cooldowns, 'bloodHarvest', 1, 3))
            lifeStealed += Math.floor(attackDamage * 0.5);

        const playerAfterRegenAndLifeSteal = playerAfterRegen.currentHealth < playerAfterRegen.maxHealth
            ? {
                ...playerAfterRegen,
                currentHealth: (playerAfterRegen.currentHealth + lifeStealed > playerAfterRegen.maxHealth)
                    ? playerAfterRegen.maxHealth
                    : playerAfterRegen.currentHealth + lifeStealed
            } : playerAfterRegen;

        if (player.currentHealth < player.maxHealth)
            setPlayer(playerAfterRegenAndLifeSteal);

        const newEnemyHealth = enemies[randomTarget].currentHealth - attackDamage;
        const isEnemyKilled = newEnemyHealth <= 0;
        const newEnemies = isEnemyKilled
            ? enemies.filter(enemy => enemy.id !== enemies[randomTarget].id)
            : enemies.map((enemy, index) =>
                index === randomTarget
                    ? { ...enemy, currentHealth: newEnemyHealth }
                    : enemy
            );

        setEnemies(newEnemies);

        const newQueue = (isEnemyKilled)
            ? turns.queue.filter(unit => unit.id !== enemies[randomTarget].id)
            : turns.queue;

        const newTurns = ({
            queue: newQueue,
            turnOrder: (turns.turnOrder + 1) % newQueue.length,
            cooldowns: updateCooldowns(turns.cooldowns)
        });
        setTurns(newTurns);

        if (isEnemyKilled) {
            handleEnemyKill(enemies[randomTarget].value);

            addAttackEffect({
                unitId: player.id,
                killedAvatar: enemies[randomTarget].avatar,
                value: attackDamage,
                type: 'kill'
            });
            playSoundByName('kill', volume);
        } else {
            if (isCritical)
                playSoundByName('critical', volume);

            addAttackEffect({
                unitId: enemies[randomTarget].id,
                value: attackDamage,
                isCritical: isCritical
            });
        }

        delayNextTurn(newEnemies, playerAfterRegenAndLifeSteal, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);

    }

    const handleSkill = (skill, player, enemies, setPlayer, setEnemies, turns, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems) => {
        setSelectedAction('attack');
        const { playerAfterRegen } = regenHp(player);

        switch (skill) {
            case 'shieldWall': {

                const shieldValue = Math.ceil(player.maxHealth / 100 * 30);
                const newPlayer = { ...playerAfterRegen, shield: shieldValue };
                setPlayer(newPlayer);

                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'shieldWall', rounds: 5 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    value: shieldValue,
                    type: 'shield'
                });
                playSoundByName('shield', volume);

                delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
            case 'rageStrike': {
                const newTurns = {
                    ...turns,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'rageStrike', rounds: 4 }]
                };
                setTurns(newTurns);

                doAttack(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
            case 'berserk': {
                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'berserk', rounds: 5 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    type: 'berserk'
                });

                playSoundByName('berserk', volume);

                delayNextTurn(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);

                break;
            }

            case 'shadowStrike': {
                const newTurns = {
                    ...turns,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'shadowStrike', rounds: 3 }]
                };
                setTurns(newTurns);

                doAttack(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
            case 'bloodHarvest': {
                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'harvest', rounds: 3 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    type: 'harvest'
                });

                playSoundByName('harvest', volume);

                doAttack(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);

                break;
            }
            case 'voidDance': {
                const newTurns = {
                    ...turns,
                    cooldowns: [...turns.cooldowns, { skill: 'voidDance', rounds: 6 }]
                };

                addAttackEffect({
                    unitId: player.id,
                    type: 'voidDance'
                });

                playSoundByName('voidDance', volume);

                doMassiveAttack(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                
                break;
            }

            case 'piercingHowl': {
                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'piercingHowl', rounds: 3 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    type: 'piercingHowl'
                });

                playSoundByName('piercingHowl', volume);

                delayNextTurn(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }

            case 'venomBlade': {
                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'venomBlade', rounds: 5 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    type: 'venomBlade'
                });

                playSoundByName('venomBlade', volume);

                delayNextTurn(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);

                break;
            }
            case 'earthShatter': {
                const newTurns = {
                    ...turns,
                    cooldowns: [...turns.cooldowns, { skill: 'earthShatter', rounds: 4 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    type: 'earthShatter'
                });

                playSoundByName('earthShatter', volume);

                doMassiveAttack(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);

                break;
            }

        }
    }

    const handleItem = (item, player, enemies, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems) => {
        setSelectedAction('attack');
        const { playerAfterRegen } = regenHp(player);

        switch (item) {
            case 'bandage': {
                const healValue = Math.floor(playerAfterRegen.maxHealth * 0.3);
                const newHp = playerAfterRegen.currentHealth + healValue > playerAfterRegen.maxHealth
                    ? playerAfterRegen.maxHealth
                    : playerAfterRegen.currentHealth + healValue;
                const newPlayer = { ...playerAfterRegen, currentHealth: newHp };
                setPlayer(newPlayer);

                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns)]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    value: healValue,
                    type: 'heal'
                });
                playSoundByName('heal', volume);

                delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
            case 'adrenaline': {
                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'adrenaline', rounds: 3 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    value: 0,
                    type: 'adrenaline'
                });

                delayNextTurn(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
            case 'titanPotion': {
                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns), { skill: 'titan', rounds: 2 }]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    value: 0,
                    type: 'titan'
                });

                delayNextTurn(enemies, playerAfterRegen, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
            case 'shieldGenerator': {
                const shieldValue = Math.floor(playerAfterRegen.maxHealth * 0.5);
                const newPlayer = { ...playerAfterRegen, shield: shieldValue };
                setPlayer(newPlayer);

                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length,
                    cooldowns: [...updateCooldowns(turns.cooldowns)]
                };
                setTurns(newTurns);

                addAttackEffect({
                    unitId: player.id,
                    value: shieldValue,
                    type: 'shield'
                });
                playSoundByName('shield', volume);

                delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                break;
            }
        }
    }

    const initBattle = (xp, championClass, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, items, setUsableItems, battleNumber) => {
        const totalValue = getTotalValue(battleNumber);
        const player = initPlayer(xp, championClass, setPlayer, items);
        const enemies = initEnemies(setEnemies, totalValue);
        const turns = initTurns(player, enemies, setTurns);
        const usableItems = generateBattleItems(setUsableItems);

        delayNextTurn(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems, 500);
    }

    const continueBattle = (xp, player, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, setUsableItems, battleNumber, items) => {

        const getPlayer = () => {
            const { stats, maxHealth } = getStatsOverAll(getLvl(xp), player.id, items);
            const newPlayer = { ...player, stats: stats, maxHealth: maxHealth, xp: xp }
            setPlayer(newPlayer);
            return newPlayer;
        }
        const newPlayer = getLvl(player.xp) >= getLvl(xp)
            ? player
            : getPlayer();

        const totalValue = getTotalValue(battleNumber);
        const enemies = initEnemies(setEnemies, totalValue);
        const turns = initTurns(newPlayer, enemies, setTurns);
        const usableItems = generateBattleItems(setUsableItems);

        delayNextTurn(enemies, newPlayer, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems, 500);
    }

    const iterateTurns = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems) => {
        if (player.currentHealth <= 0) return;
        if (enemies.length === 0) return;

        if (selectedActionRef.current === 'pause') {
            delayNextTurn(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems, 250)
            return;
        }

        const activeUnitId = turns.queue[turns.turnOrder]?.id;
        const activeUnit = (activeUnitId === player.id)
            ? player
            : enemies.find(enemy => enemy.id === activeUnitId);

        if (turns.queue[turns.turnOrder].id === player.id) {
            const action = selectedActionRef.current.split(' ')[0];
            switch (action) {
                case 'attack': {
                    doAttack(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                    break;
                }

                case 'skill': {
                    const skill = selectedActionRef.current.split(' ')[1];
                    turns.cooldowns?.some(cooldown => cooldown.skill === skill)
                        ? doAttack(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems)
                        : handleSkill(skill, player, enemies, setPlayer, setEnemies, turns, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                    break;
                }
                case 'item': {
                    const item = selectedActionRef.current.split(' ')[1];
                    const indexItem = usableItems.findIndex(usableItem => usableItem.id === item);
                    const newUsableItems = [...usableItems];
                    newUsableItems.splice(indexItem, 1);
                    setUsableItems(newUsableItems);

                    handleItem(item, player, enemies, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, newUsableItems, setUsableItems);
                    break;
                }
                default: {
                    doAttack(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                    break;
                }
            }

        } else {
            if (isBuffActive(turns.cooldowns, 'earthShatter', 1, 3)){

                const nextTurnOrder = (turns.turnOrder + 1) % turns.queue.length;
                const newTurns = ({
                    queue: turns.queue,
                    turnOrder: nextTurnOrder,
                    cooldowns: turns.cooldowns
                });
                setTurns(newTurns);

                addAttackEffect({
                    unitId: activeUnit.id,
                    type: 'stunned'
                });

                delayNextTurn(enemies, player, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
                return;
            }

            const defense = isBuffActive(turns.cooldowns, 'berserk', 5, 5)
                ? Math.floor(player.stats.defense * 0.85)
                : player.stats.defense;
            const { attackDamage, isCritical } = getAttackDamage(activeUnit.minAttack, activeUnit.maxAttack, 1, defense);

            const newPlayer = (player.shield > 0)
                ? (player.shield - attackDamage >= 0)
                    ? { ...player, shield: player.shield - attackDamage }
                    : { ...player, shield: 0, currentHealth: player.currentHealth - (attackDamage - player.shield) }
                : { ...player, currentHealth: player.currentHealth - attackDamage };

            setPlayer(newPlayer);

            const nextTurnOrder = (turns.turnOrder + 1) % turns.queue.length;
            const newTurns = ({
                queue: turns.queue,
                turnOrder: nextTurnOrder,
                cooldowns: turns.cooldowns
            });
            setTurns(newTurns);
            addAttackEffect({
                unitId: player.id,
                value: attackDamage,
                isCritical: isCritical
            });

            delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, usableItems, setUsableItems);
        }
    }

    return { initBattle, continueBattle };
}