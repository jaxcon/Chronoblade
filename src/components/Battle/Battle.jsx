import React from 'react';
import {
    BattleWrapper,
    TurnHistory,
    Avatar,
} from './Battle.styled';
import { useBattle } from '../../context/BattleContext'
import EnemyRow from './EnemiesRow/EnemyRow';
import PlayerRow from './PlayerRow/PlayerRow';
import ControlPanel from './ControlPanel/ControlPanel';

const Battle = ({ turnLog }) => {
    const { resetBattle, setPlayer, setEnemies, player, handleEnemyKill, enemies, setSelectedAction, selectedAction } = useBattle();

    return (
        <BattleWrapper>
            <EnemyRow enemies={enemies} />
            <PlayerRow player={player} />

            <ControlPanel selectedAction={selectedAction} setSelectedAction={setSelectedAction} />

            <TurnHistory>
                {turnLog.map((char, index) => (
                    <Avatar
                        key={index}
                        src={char.image}
                        alt={char.name}
                        title={char.name}
                    />
                ))}
            </TurnHistory>
        </BattleWrapper>
    );
};

export default Battle;