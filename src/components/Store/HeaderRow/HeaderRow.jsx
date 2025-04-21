import {
    HeaderContainer,
    CurrencyGroup,
    CurrencyAmount,
    CurrencyIcon,
    BackButton,
    StatBar,
    StatItem,
    TopRow,
    Divider
} from "./HeaderRow.styled";

const HeaderRow = ({ onBack, gold, stats }) => {
    return (
        <HeaderContainer>
            <TopRow>
                <BackButton onClick={onBack}>
                    <img src={'assets/icons/back.svg'} alt="back" />
                </BackButton>

                <CurrencyGroup>
                    <CurrencyIcon src={'assets/icons/gem.svg'} alt="Gold" />
                    <CurrencyAmount>{gold}</CurrencyAmount>
                </CurrencyGroup>
            </TopRow>

            <Divider />

            <StatBar>
                <StatItem>⚔️ {stats.attack}</StatItem>
                <StatItem>🩸 {stats.vampirism}%</StatItem>
                <StatItem>🎯 {stats.critChance}%</StatItem>
                <StatItem>❤️ {stats.health}%</StatItem>
                <StatItem>🔰 {stats.shield}%</StatItem>
            </StatBar>

        </HeaderContainer>
    );
};

export default HeaderRow;