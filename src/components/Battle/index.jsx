import { useCallback, useEffect, useState } from 'react';
import { BattleWrapper } from './styles';

import { usePlayer } from '../../context/PlayerContext';
import { useBattle } from '../../context/BattleContext';

import EnemyRow from './EnemiesRow';
import PlayerRow from './PlayerRow';
import ControlPanel from './ControlPanel';
import TurnHistory from './TurnHistory';
import DefeatModal from './DefeatModal';

import { usePlay } from '../../hooks/usePlay';
import { useNavigate } from 'react-router-dom';
import VictoryModal from './VictoryModal';

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
    } = useBattle();
    const initBattle = usePlay();

    const handleExit = useCallback(() => navigate("/"), []);

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
                setIsGameOver(true);
            }, 500);   
        }

    }, [player?.currentHealth])

    useEffect(() => {
        if (enemies?.length === 0 && player?.currentHealth > 0)
        {
            setTimeout(() => {
                setIsBattleWin(true);
            }, 1000);  
        }
        
    }, [enemies])

    

    if (!turns?.queue?.length) return;


    return (
        <BattleWrapper>
            <EnemyRow enemies={enemies} />
            <PlayerRow player={player} />
            <ControlPanel {...{ selectedAction, setSelectedAction, championClass, xp}} />
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
                    gameResult={gameResult}
                />
            )}

        </BattleWrapper>
    );
};

export default Battle;