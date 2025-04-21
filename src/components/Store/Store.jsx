import { useNavigate } from 'react-router-dom';
import { ShopWrapper } from "./Store.styled";
import { usePlayer } from '../../context/PlayerContext';
import ItemGrid from './ItemGrid/ItemGrid';
import HeaderRow from './HeaderRow/HeaderRow';
import WaveSeparator from './WaveSeparator/WaveSeparator';

const Store = () => {
    const navigate = useNavigate();
    const { buyNewItem, gold, items: buyedItems } = usePlayer();

    return (
        <ShopWrapper>
            <HeaderRow onBack={() => navigate('/')} gold={gold} stats={{ attack: 15, vampirism: 7, critChance: 10, speed: 12 }} />

            <WaveSeparator />
            
            <ItemGrid buyedItems={buyedItems} buyNewItem={buyNewItem} />
        </ShopWrapper>
    );
};

export default Store;