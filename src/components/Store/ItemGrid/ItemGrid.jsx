import {
    ItemsWrapper,
    ItemCard,
    ItemName,
    ItemStats,
    BuyButton,
    StockInfo,
    ItemImage
} from "./ItemGrid.styled";
import items from './itemsData';

const ItemGrid = ({ buyedItems, buyNewItem }) => {

    return (
        <ItemsWrapper>
            {items?.map((item) => (
                <ItemCard key={item.id}>
                     <ItemImage src={item.image} alt={item.name} />
                    <ItemName>{item.name}</ItemName>
                    <ItemStats>{item.effect}</ItemStats>
                    {item.stock !== Infinity && (
                        <StockInfo>Осталось: {item.stock}</StockInfo>
                    )}
                    <BuyButton
                        disabled={item.stock === 0}
                        onClick={() => null}
                    >
                        Купить за {item.price}
                    </BuyButton>
                </ItemCard>
            ))}
        </ItemsWrapper>
    );
};

export default ItemGrid;