import {
    Card,
    Image,
    Name,
    Description,
    SwipeArea,
    ChooseButton
} from './styles';
import { useTranslation } from 'react-i18next';
import StatsBlock from '../StatsBlock';
import { useSwipe } from '../../../hooks/useSwipe';
import { getLvl, getStatsFromLvl } from '../../../utils/championDataHandle';

function CharacterCard({ image, champId, champXp, onSwipe, onConfirm }) {
    const { t: getString } = useTranslation();
    const { swipeHandlers } = useSwipe(onSwipe);

    return (
        <SwipeArea
            onTouchStart={swipeHandlers.onTouchStart}
            onTouchEnd={swipeHandlers.onTouchEnd}
        >
            <Card>
                <Name>
                    {getString(champId)}
                </Name>
                <Image src={image} alt={getString(champId)} />
                <StatsBlock stats={getStatsFromLvl(getLvl(champXp), champId)} />
                <Description>
                    {getString(champId + 'Description')}
                </Description>
                <ChooseButton onClick={onConfirm}>
                    {getString('select')}
                </ChooseButton>
            </Card>
        </SwipeArea>
    );
}

export default CharacterCard;