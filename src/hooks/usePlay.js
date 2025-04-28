import { getTotalValue, initPlayer, initEnemies, initTurns, getAttackDamage } from '../utils/battleUtils';
import { useBattle } from '../context/BattleContext';
import { useEffect, useRef } from 'react';
import { playSoundByName } from '../utils/soundManager';
import { usePlayer } from '../context/PlayerContext';

export const usePlay = () => {
    const { selectedAction } = useBattle();
    const selectedActionRef = useRef(selectedAction);
    const { volume } = usePlayer();

    useEffect(() => {
        selectedActionRef.current = selectedAction;
    }, [selectedAction]);

    const delayNextTurn = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, delay = 1000) => {
        setTimeout(() => {
            iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);
        }, delay);
    };


    const handleSkill = (skill, player, enemies, setPlayer, setEnemies, turns, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect) => {
        switch(skill) {
            case 'shieldWall':
                const shieldValue = Math.ceil(player.maxHealth / 2.5);
                const newPlayer = {...player, shield: shieldValue};
                setPlayer(newPlayer);

                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length
                };
                setTurns(newTurns);
                setSelectedAction('attack');

                addAttackEffect({
                    unitId: player.id,
                    shield: shieldValue,
                    type: 'shield'
                });
                playSoundByName('getShield', volume);

                delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);
                break;
            case 'rageStrike':
                
                break;
            case 'berserk':
                break;
            case 'shadowStrike':
                break;
            case 'blink':
                break;
            case 'voidDance':
                break;
            case 'piercingHowl':
                break;
            case 'venomBlade':
                break;
            case 'earthShatter':
                break;

        }
    }

    const initBattle = (xp, championClass, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect) => {
        const totalValue = getTotalValue(xp);
        const player = initPlayer(xp, championClass, setPlayer);
        const enemies = initEnemies(setEnemies, totalValue);
        const turns = initTurns(player, enemies, setTurns);

        delayNextTurn(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, 500);
    }

    const iterateTurns = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect) => {
        if (player.currentHealth <= 0) return;
        if (enemies.length === 0) return;

        if (selectedActionRef.current === 'pause') {
            delayNextTurn(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, 250)
            return;
        }

        const activeUnitId = turns.queue[turns.turnOrder]?.id;
        const activeUnit = (activeUnitId === player.id)
            ? player
            : enemies.find(enemy => enemy.id === activeUnitId);

        if (turns.queue[turns.turnOrder].id === player.id) {
            const action = selectedActionRef.current.split(' ')[0];
            switch (action) {
                case 'attack':
                    const randomTarget = Math.floor(Math.random() * (enemies.length));
                    const attackDamage = getAttackDamage(player.stats.minAttack, player.stats.maxAttack);     

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

                    const nextTurnOrder = (turns.turnOrder + 1) % turns.queue.length;
                    const newTurns = ({ queue: newQueue, turnOrder: nextTurnOrder });
                    setTurns(newTurns);

                    if (isEnemyKilled) {
                        handleEnemyKill(enemies[randomTarget].value);

                        addAttackEffect({
                            unitId: player.id,
                            killedAvatar: enemies[randomTarget].avatar,
                            damage: attackDamage,
                            type: 'kill'
                          });
                        playSoundByName('kill', volume);
                    } else {
                        addAttackEffect({
                            unitId: enemies[randomTarget].id,
                            damage: attackDamage
                          });
                        playSoundByName('attack', volume);
                    }

                    delayNextTurn(newEnemies, player, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);
                    break;
                    
                case 'skill':
                    const skill = selectedActionRef.current.split(' ')[1];
                    handleSkill(skill, player, enemies, setPlayer, setEnemies, turns, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);
            }


        } else {
            const attackDamage = getAttackDamage(activeUnit.minAttack, activeUnit.maxAttack);

            const newPlayer = (player.shield > 0)
                ? (player.shield - attackDamage >= 0)
                    ? { ...player, shield: player.shield - attackDamage }
                    : { ...player, shield: 0,  currentHealth: player.currentHealth - (attackDamage - player.shield)}
                : { ...player, currentHealth: player.currentHealth - attackDamage };

            setPlayer(newPlayer);

            const nextTurnOrder = (turns.turnOrder + 1) % turns.queue.length;
            const newTurns = ({ queue: turns.queue, turnOrder: nextTurnOrder });
            setTurns(newTurns);
            addAttackEffect({
                unitId: player.id,
                damage: attackDamage
              });

            playSoundByName('gotHitting', volume);

            delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);
        }
    }

    return initBattle;
}