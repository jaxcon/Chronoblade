import {
    PlayerSection,
    PlayerWrapper,
    PlayerImage,
    HPBarWrapper,
    HPBar,
    ShieldBar,
    HPText
} from './styles';

const PlayerRow = ( { player }) => {
    const hpPercent = (player.currentHealth / player.maxHealth) * 100;
    const shieldPercent = (player.shield / player.maxHealth) * 100;

    return (
        <PlayerSection>
            <PlayerWrapper>
                <PlayerImage
                    src={player.imageSource}
                    alt={player.champClass}
                />
                <HPBarWrapper>
                    <HPBar $hpPercent={hpPercent} />
                    {player.shield > 0 && (
                        <ShieldBar $shieldPercent={shieldPercent} />
                    )}
                    <HPText>{player.currentHealth}</HPText>
                </HPBarWrapper>

            </PlayerWrapper>
        </PlayerSection>
    )
};

export default PlayerRow;
