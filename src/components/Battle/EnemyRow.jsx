import {
    EnemySection,
    EnemyImage,
    HPBarWrapper,
    HPBar,
    HPText,
    EnemyWrapper
} from './Battle.styled';

const EnemyRow = ( { enemies }) => {
    return (
        <EnemySection>
            {enemies?.map((enemy, index) => (
                <EnemyWrapper key={enemy.id}>
                    <EnemyImage
                        src={enemy.image}
                        alt={enemy.name}
                        $isAlive={enemy.isAlive}
                    />
                    <HPBarWrapper>
                        <HPBar $hpPercent={(enemy.hp / enemy.maxHp) * 100} />
                        <HPText>{enemy.hp}</HPText>
                    </HPBarWrapper>
                    
                </EnemyWrapper>
            ))}
        </EnemySection>
    )
};

export default EnemyRow;
