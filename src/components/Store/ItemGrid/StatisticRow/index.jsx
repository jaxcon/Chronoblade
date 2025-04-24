import {
    TopInfo,
    BoughtCount,
    StockCount
} from "./styles";

const StatisticRow = ({ purchasedCount, itemCount}) => {
    return (
        <TopInfo>
            <BoughtCount>🛒 {purchasedCount}</BoughtCount>
            <StockCount>📦 {itemCount}</StockCount>
        </TopInfo>
    )
};

export default StatisticRow;
