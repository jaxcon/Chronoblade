import { useRef } from 'react';
import {
    Card,
    Image,
    Name,
    Stats,
    StatRow,
    Description,
    SwipeArea,
    ChooseButton
} from './CharacterPicker.styled';

function CharacterCard({ character, onSwipe }) {
    const touchStartX = useRef(null);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const deltaX = e.changedTouches[0].clientX - touchStartX.current;
        if (deltaX > 50) {
            onSwipe('right');
        } else if (deltaX < -50) {
            onSwipe('left');
        }
        touchStartX.current = null;
    };

    return (
        <SwipeArea
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
        >
            <Card>
                <Name>{character.name}</Name>
                <Image src={character.image} alt={character.name} />
                <Stats>
                    <StatRow>🗡 Атака: {character.stats.attack}</StatRow>
                    <StatRow>🛡 Защита: {character.stats.defense}</StatRow>
                    <StatRow>⚡️ Скорость: {character.stats.speed}</StatRow>
                </Stats>
                <Description>{character.description}</Description>
                <ChooseButton>Выбрать</ChooseButton>
            </Card>
        </SwipeArea>
    );
}

export default CharacterCard;
