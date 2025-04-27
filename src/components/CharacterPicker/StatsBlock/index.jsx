import { Stats, StatRow } from './styles';

const StatsBlock = ({ getString, stats }) => {
    const { attack, defense, speed } = stats;
    
    return (
        <Stats>
            <StatRow>
                <span className="icon">🗡</span>
                <span className="label">{getString('attack')}</span>
                <span>{attack}</span>
            </StatRow>
            <StatRow>
                <span className="icon">🛡</span>
                <span className="label">{getString('defense')}</span>
                <span>{defense}</span>
            </StatRow>
            <StatRow>
                <span className="icon">⚡️</span>
                <span className="label">{getString('speed')}</span>
                <span>{speed}</span>
            </StatRow>
        </Stats>
    )
};

export default StatsBlock;