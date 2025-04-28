import { useBattle } from '../../../context/BattleContext';
import ActionEffect from '../ActionEffect';
import {
    EnemySection,
    EnemyImage,
    HPBarWrapper,
    HPBar,
    HPText,
    EnemyWrapper
} from './styles';

const EnemiesRow = ({ enemies }) => {
    const { attackEffects } = useBattle();

    return (
        <EnemySection>
            {enemies?.map((enemy, index) => {

                return (
                    <EnemyWrapper key={'unit ' + enemy.id + index}>
                        <EnemyImage
                            src={enemy.image}
                            alt={enemy.name}
                        />
                        <HPBarWrapper>
                            <HPBar $hpPercent={enemy.currentHealth / enemy.stats.maxHealth * 100} />
                            <HPText>
                                {enemy.currentHealth}
                            </HPText>
                        </HPBarWrapper>
                        {attackEffects
                            .filter(effect => effect.unitId === enemy.id)
                            .map((effect) => (
                                <ActionEffect
                                    key={effect.id}
                                    damage={effect.damage}
                                    type={effect.type}
                                />
                            ))}
                    </EnemyWrapper>
                )
            })}
        </EnemySection>
    )
};

export default EnemiesRow;