import React, { useEffect } from 'react';
import { BattleWrapper } from './Battle.styled';
import { useBattle } from '../../context/BattleContext'
import EnemyRow from './EnemiesRow/EnemyRow';
import PlayerRow from './PlayerRow/PlayerRow';
import ControlPanel from './ControlPanel';
import TurnHistory from './TurnHistory';

const Battle = () => {
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
        setTurns

    } = useBattle();

    useEffect(() => {
        if (!turns?.queue?.length) return;


        console.log(turns.queue)
    }, [turns])

    return (
        <BattleWrapper>
            <EnemyRow enemies={enemies} />
            <PlayerRow player={player} />

            <ControlPanel selectedAction={selectedAction} setSelectedAction={setSelectedAction} />

            <TurnHistory turns={turns} />

        </BattleWrapper>
    );
};

export default Battle;