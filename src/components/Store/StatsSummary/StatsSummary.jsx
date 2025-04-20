import {
    StatsWrapper,
    StatRow,
    StatLabel
} from './StatsSummary.styled';

const StatsSummary = ({ stats }) => {
    return (
        <StatsWrapper>
            <StatRow>
                <StatLabel>Атака</StatLabel>
                <span>+{stats.attack}</span>
            </StatRow>
            <StatRow>
                <StatLabel>Вампиризм</StatLabel>
                <span>+{stats.vampirism}%</span>
            </StatRow>
            <StatRow>
                <StatLabel>Крит. шанс</StatLabel>
                <span>+{stats.critChance}%</span>
            </StatRow>
            <StatRow>
                <StatLabel>Скорость</StatLabel>
                <span>+{stats.speed}%</span>
            </StatRow>
        </StatsWrapper>
    );
};

export default StatsSummary;
