import { Stats, StatRow } from './CharacterPicker.styled';

const StatsBlock = ({ getString, stats }) => {
    return (
        <Stats>
            <StatRow>
                <span className="icon">🗡</span>
                <span className="label">{getString('attack')}</span>
                <span>{stats.attack}</span>
            </StatRow>
            <StatRow>
                <span className="icon">🛡</span>
                <span className="label">{getString('defense')}</span>
                <span>{stats.defense}</span>
            </StatRow>
            <StatRow>
                <span className="icon">⚡️</span>
                <span className="label">{getString('speed')}</span>
                <span>{stats.speed}</span>
            </StatRow>
        </Stats>
    )
};

export default StatsBlock;