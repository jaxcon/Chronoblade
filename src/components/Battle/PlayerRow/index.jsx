import { useBattle } from '../../../context/BattleContext';
import ActionEffect from '../ActionEffect';
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

    const { attackEffects } = useBattle();

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
                {attackEffects
                    .filter(effect => effect.unitId === player.id)
                    .map((effect) => (
                            <ActionEffect
                                key={effect.id}
                                damage={effect.damage}
                                type={effect.type}
                                avatar={effect.killedAvatar}
                                shield={effect.shield}
                            />
                    ))}
            </PlayerWrapper>
        </PlayerSection>
    )
};

export default PlayerRow;
