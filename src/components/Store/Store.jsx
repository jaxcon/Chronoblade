import { ShopWrapper } from "./Store.styled";
import { usePlayer } from '../../context/PlayerContext';
import ItemGrid from './ItemGrid/ItemGrid';
import HeaderRow from './HeaderRow';
import WaveSeparator from './WaveSeparator';

const Store = () => {
    const { buyNewItem, gold, items: buyedItems } = usePlayer();

    return (
        <ShopWrapper>
            <HeaderRow
                gold={gold}
                buyedItems={buyedItems}
            />

            <WaveSeparator />

            <ItemGrid buyedItems={buyedItems} buyNewItem={buyNewItem} gold={gold} />
        </ShopWrapper>
    );
};

export default Store;