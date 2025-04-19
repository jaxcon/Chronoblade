import { useRef } from 'react';
import {
    Card,
    Image,
    Name,
    Description,
    SwipeArea,
    ChooseButton
} from './CharacterPicker.styled';
import { usePlayer } from '../../context/PlayerContext';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import StatsBlock from './StatsBlock';


function CharacterCard({ character, onSwipe }) {
    const { updateChampion } = usePlayer();
    const navigate = useNavigate();
    const { t: getString } = useTranslation();

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
                <Name>{getString(character.id)}</Name>
                <Image src={character.image} alt={getString(character.id)} />
                <StatsBlock getString={getString} stats={character.stats} />
                <Description>{getString(character.id + 'Description')}</Description>
                <ChooseButton onClick={() => {
                    updateChampion(character.id);
                    navigate('/');
                }}>{getString('select')}</ChooseButton>
            </Card>
        </SwipeArea>
    );
}

export default CharacterCard;