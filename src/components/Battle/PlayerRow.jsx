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

const PlayerRow = ( { player }) => {
    return (
        <PlayerSection>
            <div key={player.champClass} style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <PlayerImage
                    src={player.imageSource}
                    alt={'3213'}
                />
                <HPBarWrapper>
                    <HPBar $hpPercent={(player.currentHealth / player.maxHealth) * 100} />
                    <HPText>{player.currentHealth}</HPText>
                </HPBarWrapper>

            </div>
        </PlayerSection>
    )
};

export default PlayerRow;
