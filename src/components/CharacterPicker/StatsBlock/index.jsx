import {
    OuterContainer,
    StatsContainer,
    StatItem,
    StatBar,
    StatFill
} from './styles';

function StatsBlock({ stats }) {
    return (
        <OuterContainer>
            <StatsContainer>
                <StatItem>
                    <span>⚔️ {stats.minAttack}-{stats.maxAttack}</span>
                    <StatBar>
                        <StatFill
                            value={(stats.minAttack + stats.maxAttack) / 2}
                            color="#FF5722"
                        />
                    </StatBar>
                </StatItem>

                <StatItem>
                    <span>🔰 {stats.defense}</span>
                    <StatBar>
                        <StatFill value={stats.defense * 3} color="#2196F3" />
                    </StatBar>
                </StatItem>

                <StatItem>
                    <span>❤️ {stats.health}</span>
                    <StatBar>
                        <StatFill value={stats.health / 2} color="#F44336" />
                    </StatBar>
                </StatItem>

                <StatItem>
                    <span>⚡️ {stats.speed}</span>
                    <StatBar>
                        <StatFill value={stats.speed * 10} color="#FFC107" />
                    </StatBar>
                </StatItem>
            </StatsContainer>

            <StatsContainer>
                <StatItem>
                    <span>🩸 {stats.lifeSteal}%</span>
                    <StatBar>
                        <StatFill value={stats.lifeSteal} color="#9C27B0" />
                    </StatBar>
                </StatItem>

                <StatItem>
                    <span>✨ {stats.criticalChance}%</span>
                    <StatBar>
                        <StatFill value={stats.criticalChance} color="#673AB7" />
                    </StatBar>
                </StatItem>

                <StatItem>
                    <span>🛡️ {stats.shield}</span>
                    <StatBar>
                        <StatFill value={stats.shield} color="#00BCD4" />
                    </StatBar>
                </StatItem>

                <StatItem>
                    <span>🔮 {stats.skills.length}</span>
                    <StatBar>
                        <StatFill
                            value={stats.skills.length * 33}
                            color="#E91E63"
                        />
                    </StatBar>
                </StatItem>
            </StatsContainer>
        </OuterContainer>
    );
};

export default StatsBlock;