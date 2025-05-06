import { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard';
import { Wrapper, NavDots, Dot } from './styles';
import { usePlayer } from '../../context/PlayerContext';
import { useNavigate } from 'react-router-dom';

const characterData = [
    {
        id: 'draygar',
        image: 'assets/units/allies/draygar.png'
    },
    {
        id: 'danitsa',
        image: 'assets/units/allies/danitsa.png'
    },
    {
        id: 'jormungad',
        image: 'assets/units/allies/jormungad.png'
    }
];

function CharacterPicker() {
    const navigate = useNavigate();
    const { updateChampion, champions, selectedChampion } = usePlayer();
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setIndex(selectedChampion
            ? characterData.findIndex(character => character.id === selectedChampion)
            : 0)
    }, [selectedChampion])

    const handleConfirm = () => {
        updateChampion(characterData[index].id);
        navigate('/');
    }

    const handleSwipe = (direction) => {
        direction === 'left'
            ? setIndex((prev) => (prev + 1) % characterData.length)
            : setIndex((prev) => (prev - 1 + characterData.length) % characterData.length);
    };

    if (!champions) return;

    return (
        <Wrapper>
            <CharacterCard
                image={characterData[index].image}
                champId={characterData[index].id}
                champXp={champions?.find(champ=> champ.id ===characterData[index].id).xp}
                onSwipe={handleSwipe}
                onConfirm={handleConfirm}
            />
            <NavDots>
                {characterData.map((_, i) => (
                    <Dot key={i} $active={i === index} onClick={() => setIndex(i)} />
                ))}
            </NavDots>
        </Wrapper>
    );
}

export default CharacterPicker;
