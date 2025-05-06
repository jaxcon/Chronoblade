import { useMemo, useState } from 'react';
import {
    ItemCardWrapper,
    ItemName,
    ItemStats,
    BuyButton,
    ItemImage,
} from "./styles";
import StatisticRow from "../StatisticRow";
import { usePlayer } from '../../../../context/PlayerContext';

const ItemCard = ({ item, getString, purchasedCount, remaining }) => {
    const [clicked, setClicked] = useState(false);
    const [key, setKey] = useState(0);

    const { buyNewItem, gold } = usePlayer();

    const memoizedItemCard = useMemo(() => {
        return (
            <ItemCardWrapper>
                <StatisticRow purchasedCount={purchasedCount} itemCount={remaining} />
                <ItemImage src={item.image} alt={item.id} />
                <ItemName>{getString(item.id)}</ItemName>
                <ItemStats>{getString(item.id + 'Stats')}</ItemStats>
                <BuyButton
                    key={key}
                    className={clicked 
                        ? 'clicked'
                        : ''}
                    disabled={item.stock - purchasedCount === 0 || item.price > gold || clicked}
                    onClick={async () => {
                        setClicked(true);
                        await buyNewItem(item.id, item.price);
                        setKey(prev => prev + 1);
                        setTimeout(() => setClicked(false), 500);
                    }}
                >
                    {getString('buy')} {item.price}
                </BuyButton>
            </ItemCardWrapper>
        );
    }, [purchasedCount, clicked, gold])

    return memoizedItemCard;
};

export default ItemCard;