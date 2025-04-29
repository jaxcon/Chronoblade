import { useNavigate } from 'react-router-dom';
import { useEffect, useMemo } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import {
    ButtonsWrapper,
    ShopButton,
    GateButton,
    TavernButton,
    BackgroundWrapper,
    BackgroundImage,
    BirdsContainer
} from './styles';
import WelcomeModal from '../WelcomeModal';
import Header from '../Header';
import Smoke from './Smoke';
import Bird from './Bird';

const delaySequence = [1, 6, 10, 20, 30, 50, 60];

function GameHub() {
    const navigate = useNavigate();
    const { username, champion } = usePlayer();

    useEffect(() => {
        if (!champion) {
            navigate('champs');
        }
    }, []);

    const birds = useMemo(() =>
        Array.from({ length: delaySequence.length }).map((_, i) => ({
            delay: delaySequence[i],
            size: `${20 + Math.random() * 15}px`,
            top: `${5 + Math.random() * 80}%`,
            left: `0%`,
            duration: `${10 + Math.random() * 15}s`
        })),
        []);
    { birds.map(props => <Bird key={props.key} {...props} />) }
    return (
        <>
            <BackgroundWrapper>
                <source srcSet="assets/locs/minimain.png" media="(max-aspect-ratio: 1/2)" />
                <source srcSet="assets/locs/main.png" media="(min-aspect-ratio: 1/2) and (max-aspect-ratio: 3/4)" />
                <source srcSet="assets/locs/main2.png" media="(min-aspect-ratio: 3/4) and (max-aspect-ratio: 1/1)" />
                <source srcSet="assets/locs/main3.png" media="(min-aspect-ratio: 1/1)" />
                <BackgroundImage src="assets/locs/main.png" alt="Background" />
            </BackgroundWrapper>

            <Smoke />
            <BirdsContainer>
                {birds.map((props, i) => <Bird key={'bird' + i} {...props} />)}
            </BirdsContainer>

            <ButtonsWrapper>
                <ShopButton onClick={() => navigate('shop')} />
                <GateButton onClick={() => navigate('battle')} />
                <TavernButton onClick={() => navigate('champs')} />
            </ButtonsWrapper>

            {!username
                ? <WelcomeModal />
                : <Header />}
        </>

    );
}

export default GameHub;