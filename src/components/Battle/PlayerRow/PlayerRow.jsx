import {
    PlayerSection,
    PlayerWrapper,
    PlayerImage,
    HPBarWrapper,
    HPBar,
    HPText
} from './PlayerRow.styled';

const PlayerRow = ( { player }) => {
    return (
        <PlayerSection>
            <PlayerWrapper>
                <PlayerImage
                    src={player.imageSource}
                    alt={'3213'}
                />
                <HPBarWrapper>
                    <HPBar $hpPercent={(player.currentHealth / player.maxHealth) * 100} />
                    <HPText>{player.currentHealth}</HPText>
                </HPBarWrapper>

            </PlayerWrapper>
        </PlayerSection>
    )
};

export default PlayerRow;
