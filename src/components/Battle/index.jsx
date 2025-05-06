import { useCallback, useEffect, useState } from 'react';
import { BattleWrapper } from './styles';

import { usePlayer } from '../../context/PlayerContext';
import { useBattle } from '../../context/BattleContext';

import EnemyRow from './EnemiesRow';
import PlayerRow from './PlayerRow';
import ControlPanel from './ControlPanel';
import TurnHistory from './TurnHistory';
import DefeatModal from './DefeatModal';
import BattleHeader from './BattleHeader';
import VictoryModal from './VictoryModal';

import { usePlay } from '../../hooks/usePlay';
import { useBattleOver } from '../../hooks/useBattleOver';

import { useNavigate } from 'react-router-dom';

const Battle = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [isBattleWin, setIsBattleWin] = useState(false);

    const navigate = useNavigate();
    const { getSelectedChamp, items } = usePlayer();
    const {
        resetBattle,
        setPlayer,
        setEnemies,
        player,
        handleEnemyKill,
        enemies,
        setSelectedAction,
        selectedAction,
        turns,
        setTurns,
        gameResult,
        addAttackEffect,
        setBattleNumber,
        battleNumber,
        usableItems,
        setUsableItems
    } = useBattle();
    const { initBattle, continueBattle } = usePlay();

    const { id: champId, xp } = getSelectedChamp();

    useBattleOver(player, enemies, setIsGameOver, setIsBattleWin);

    const handleExit = useCallback(() => navigate("/"), []);

    const onStart = () => {
        resetBattle();
        setIsGameOver(false);
        initBattle(xp, champId, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, items, setUsableItems, battleNumber);
    }

    const playNext = () => {
        setBattleNumber(prev => prev + 1);
        continueBattle(xp, player, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect, setUsableItems, battleNumber, items);
        setIsBattleWin(false);
    }

    useEffect(() => {
        onStart();
        return () => {
            resetBattle();
        }
    }, [])

    if (!turns?.queue?.length) return;

    return (
        <BattleWrapper>
            <BattleHeader battleNumber={battleNumber} />
            <EnemyRow enemies={enemies} />
            <PlayerRow player={player} />
            <ControlPanel cooldowns={turns?.cooldowns} {...{ selectedAction, setSelectedAction, champId, xp, usableItems }} />
            <TurnHistory turns={turns} />

            {isGameOver && (
                <DefeatModal
                    onExit={handleExit}
                    gameResult={gameResult}
                    onRetry={onStart}
                />
            )}
            {isBattleWin && (
                <VictoryModal
                    onExit={handleExit}
                    onContinue={playNext}
                    gameResult={gameResult}
                />
            )}
        </BattleWrapper>
    );
};

export default Battle;