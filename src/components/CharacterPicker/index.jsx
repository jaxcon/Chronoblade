import { useState } from 'react';
import characterData from './characterData';
import CharacterCard from './CharacterCard';
import { Wrapper, NavDots, Dot } from './styles';

function CharacterPicker() {
    const [index, setIndex] = useState(0);
    const current = characterData[index];

    const handleSwipe = (direction) => {
        direction === 'left'
            ? setIndex((prev) => (prev + 1) % characterData.length)
            : setIndex((prev) => (prev - 1 + characterData.length) % characterData.length);
    };

    return (
        <Wrapper>
            <CharacterCard character={current} onSwipe={handleSwipe} />
            <NavDots>
                {characterData.map((_, i) => (
                    <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
                ))}
            </NavDots>
        </Wrapper>
    );
}

export default CharacterPicker;
