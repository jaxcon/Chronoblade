import React from 'react';
import {
    BattleWrapper,
    PlayerSection,
    PlayerImage,
    ActionPanel,
    ActionButton,
    TurnHistory,
    Avatar,
    HPBarWrapper,
    HPBar,
    HPText
} from './Battle.styled';
import { useBattle } from '../../context/BattleContext'
import EnemyRow from './EnemyRow';
import PlayerRow from './PlayerRow';

const Battle = ({ turnLog }) => {
    const { resetBattle, setPlayer, setEnemies, player, handleEnemyKill, enemies, setSelectedAction, selectedAction } = useBattle();

    return (
        <BattleWrapper>
            <EnemyRow enemies={enemies} />

            <PlayerRow player={player} />

            <ActionPanel>
                <ActionButton selected={selectedAction === "attack"} onClick={() => setSelectedAction("attack")}>
                    <img src="assets/icons/attackIcon.png" alt="attack" />
                    Attack
                </ActionButton>

                <ActionButton selected={selectedAction === "skill"} onClick={() => setSelectedAction("skill")}>
                    <img src="assets/icons/skillIcon.png" alt="skill" />
                    Skill
                </ActionButton>

                <ActionButton selected={selectedAction === "item"} onClick={() => setSelectedAction("item")}>
                    <img src="assets/icons/itemIcon.png" alt="item" />
                    Item
                </ActionButton>
            </ActionPanel>

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