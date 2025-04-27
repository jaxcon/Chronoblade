import { getTotalValue, initPlayer, initEnemies, initTurns, getAttackDamage } from '../components/Battle/battleUtils';
import { useBattle } from '../context/BattleContext';
import { useEffect, useRef } from 'react';

export const usePlay = () => {
    const { selectedAction } = useBattle();
    const selectedActionRef = useRef(selectedAction);

    useEffect(() => {
        selectedActionRef.current = selectedAction;
    }, [selectedAction]);

    const delayNextTurn = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction) => {
        setTimeout(() => {
            iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction);
        }, 1000);
    };


    const handleSkill = (skill, player, enemies, setPlayer, setEnemies, turns, setTurns, handleEnemyKill, setSelectedAction) => {
        switch(skill) {
            case 'shieldWall':
                const newPlayer = {...player, shield: Math.ceil(player.maxHealth / 2.5)};
                setPlayer(newPlayer);

                const newTurns = {
                    queue: turns.queue,
                    turnOrder: (turns.turnOrder + 1) % turns.queue.length
                };
                setTurns(newTurns);
                setSelectedAction('attack');
                delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction);
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



    const initBattle = (xp, championClass, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction) => {
        const totalValue = getTotalValue(xp);
        const player = initPlayer(xp, championClass, setPlayer);
        const enemies = initEnemies(setEnemies, totalValue);
        const turns = initTurns(player, enemies, setTurns);

        iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction);
    }

    const iterateTurns = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction) => {
        if (player.currentHealth <= 0) return;
        if (enemies.length === 0) return;

        if (selectedActionRef.current === 'pause') {
            setTimeout(() => {
                iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction);
            }, 250);
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
                    const newEnemies = (newEnemyHealth <= 0)
                        ? enemies.filter(enemy => enemy.id !== enemies[randomTarget].id)
                        : enemies.map((enemy, index) =>
                            index === randomTarget
                                ? { ...enemy, currentHealth: newEnemyHealth }
                                : enemy
                        );

                    setEnemies(newEnemies);
                    
                    if (newEnemyHealth <= 0) {
                        handleEnemyKill(enemies[randomTarget].value);
                    }

                    const newQueue = (newEnemyHealth <= 0)
                        ? turns.queue.filter(unit => unit.id !== enemies[randomTarget].id)
                        : turns.queue;

                    const nextTurnOrder = (turns.turnOrder + 1) % turns.queue.length;
                    const newTurns = ({ queue: newQueue, turnOrder: nextTurnOrder });
                    setTurns(newTurns);

                    delayNextTurn(newEnemies, player, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction);
                    break;
                    
                case 'skill':
                    const skill = selectedActionRef.current.split(' ')[1];
                    handleSkill(skill, player, enemies, setPlayer, setEnemies, turns, setTurns, handleEnemyKill, setSelectedAction);
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

            delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction);
        }
    }

    return initBattle;
}