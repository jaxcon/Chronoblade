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

import { usePlay } from '../../hooks/usePlay';
import { useNavigate } from 'react-router-dom';
import VictoryModal from './VictoryModal';
import { playSoundByName } from '../../utils/soundManager';

const Battle = () => {
    const [isGameOver, setIsGameOver] = useState(false);
    const [isBattleWin, setIsBattleWin] = useState(false);

    const navigate = useNavigate();
    const { champion: championClass, xp } = usePlayer();
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
        battleNumber
    } = useBattle();
    const { initBattle, continueBattle } = usePlay();

    const handleExit = useCallback(() => navigate("/"), []);

    const playAgain = () => {
        setBattleNumber(prev => prev + 1);
        continueBattle(xp, player, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);
        setIsBattleWin(false);
    }

    useEffect(() => {
        resetBattle();
        initBattle(xp, championClass, setPlayer, setEnemies, setTurns, handleEnemyKill, setSelectedAction, addAttackEffect);

        return () => {
            resetBattle();
        }
    }, [])

    useEffect(() => {

        if (player?.currentHealth < 1 && player) {
            setTimeout(() => {
                playSoundByName('lose');
                setIsGameOver(true);
            }, 500);
        }

    }, [player?.currentHealth])

    useEffect(() => {
        if (enemies?.length === 0 && player?.currentHealth > 0) {
            setTimeout(() => {
                playSoundByName('win');
                setIsBattleWin(true);
            }, 1000);
        }

    }, [enemies])


    if (!turns?.queue?.length) return;

    return (
        <BattleWrapper>
            <BattleHeader battleNumber={battleNumber} />
            <EnemyRow enemies={enemies} />
            <PlayerRow player={player} />
            <ControlPanel {...{ selectedAction, setSelectedAction, championClass, xp }} />
            <TurnHistory turns={turns} />

            {isGameOver && (
                <DefeatModal
                    onExit={handleExit}
                    gameResult={gameResult}
                />
            )}
            {isBattleWin && (
                <VictoryModal
                    onExit={handleExit}
                    onContinue={playAgain}
                    gameResult={gameResult}
                />
            )}

        </BattleWrapper>
    );
};

export default Battle;