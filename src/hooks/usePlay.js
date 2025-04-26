import { getTotalValue, initPlayer, initEnemies, initTurns, getAttackDamage } from '../components/Battle/battleUtils';
import { useBattle } from '../context/BattleContext';
import { useEffect, useRef } from 'react';

export const usePlay = () => {
    const { selectedAction } = useBattle();
    const selectedActionRef = useRef(selectedAction);

    useEffect(() => {
        selectedActionRef.current = selectedAction;
    }, [selectedAction]);

    const delayNextTurn = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill) => {
        setTimeout(() => {
            iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill);
        }, 1000);
    };

    const initBattle = (xp, championClass, setPlayer, setEnemies, setTurns, handleEnemyKill) => {
        const totalValue = getTotalValue(xp);
        const player = initPlayer(xp, championClass, setPlayer);
        const enemies = initEnemies(setEnemies, totalValue);
        const turns = initTurns(player, enemies, setTurns);

        iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill);
    }

    const iterateTurns = (enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill) => {
        if (player.currentHealth <= 0) return;
        if (enemies.length === 0) return;

        if (selectedActionRef.current === 'pause') {
            setTimeout(() => {
                iterateTurns(enemies, player, turns, setPlayer, setEnemies, setTurns, handleEnemyKill);
            }, 250);
            return;
        }

        const activeUnitId = turns.queue[turns.turnOrder]?.id;
        const activeUnit = (activeUnitId === player.id)
            ? player
            : enemies.find(enemy => enemy.id === activeUnitId);

        if (turns.queue[turns.turnOrder].id === player.id) {

            switch (selectedActionRef.current) {
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

                    delayNextTurn(newEnemies, player, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill);
                    break;
                    
                case 'skill':
                    console.log('fwafpawpfdwap')
            }


        } else {
            const attackDamage = getAttackDamage(activeUnit.minAttack, activeUnit.maxAttack);

            const newHealth = player.currentHealth - attackDamage;
            const newPlayer = { ...player, currentHealth: newHealth };

            setPlayer(newPlayer);

            const nextTurnOrder = (turns.turnOrder + 1) % turns.queue.length;
            const newTurns = ({ queue: turns.queue, turnOrder: nextTurnOrder });
            setTurns(newTurns);

            delayNextTurn(enemies, newPlayer, newTurns, setPlayer, setEnemies, setTurns, handleEnemyKill);
        }
    }

    return initBattle;
}