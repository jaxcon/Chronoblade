import { ItemsWrapper } from "./styles";
import { items, getPurchasedCount, getItemCount } from './itemsData';
import { useTranslation } from 'react-i18next';
import ItemCard from "./ItemCard";

const ItemGrid = ({ buyedItems }) => {
    const { t: getString } = useTranslation();

    return (
        <ItemsWrapper>
            {items.map((item) => {
                const purchasedCount = getPurchasedCount(buyedItems, item.id);
                const itemCount = getItemCount(item.id);

                return (
                    <ItemCard
                        key={item.id}
                        item={item}
                        getString={getString}
                        purchasedCount={purchasedCount}
                        remaining={itemCount === Infinity ? '∞' : itemCount - purchasedCount}
                    />
                );
            })}
        </ItemsWrapper>
    );




};

export default ItemGrid;
