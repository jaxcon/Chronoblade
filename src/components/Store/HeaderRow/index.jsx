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
} from "./styles";
import { calculateStatsForHeader } from '../../../utils/itemsData';
import { memo, useMemo, useCallback, useState } from "react";
import { useNavigate } from 'react-router-dom';


const HeaderRow = ({ gold, buyedItems }) => {
    const [clicked, setClicked] = useState(false);

    const stats = useMemo(() => calculateStatsForHeader(buyedItems), [buyedItems]);
    const navigate = useNavigate();

    const handleBack = useCallback(() => {
        setClicked(true);
        setTimeout(() => navigate('/'), 100);
    }, []);

    return (
        <HeaderContainer>
            <TopRow>
                <BackButton className={clicked ? "clicked" : ""} onClick={handleBack}>
                    <img src='assets/icons/back.svg' alt="back" />
                </BackButton>

                <CurrencyGroup>
                    <CurrencyIcon src={'assets/icons/gem.svg'} alt="Gold" />
                    <CurrencyAmount>{gold}</CurrencyAmount>
                </CurrencyGroup>
            </TopRow>

            <Divider />

            <StatBar>
                {stats.map((stat) =>
                    <StatItem key={stat.emoji}>
                        {stat.emoji} {stat.value}
                    </StatItem>
                )}
            </StatBar>

        </HeaderContainer>
    );
};

export default memo(HeaderRow);