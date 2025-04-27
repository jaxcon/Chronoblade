import {
    EnemySection,
    EnemyImage,
    HPBarWrapper,
    HPBar,
    HPText,
    EnemyWrapper
} from './styles';

const EnemiesRow = ({ enemies }) => {

    return (
        <EnemySection>
            {enemies?.map((enemy, index) => (
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
                </EnemyWrapper>
            ))}
        </EnemySection>
    )
};

export default EnemiesRow;