import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import {
    ButtonsWrapper,
    ShopButton,
    GateButton,
    TavernButton,
    BackgroundImage
} from './GameHub.styled';

import WelcomeModal from '../WelcomeModal/WelcomeModal';
import { playSoundByName } from '../soundManager';
import Header from '../Header/Header';

const aspectRatio = window.innerWidth / window.innerHeight;
const imageSource = aspectRatio < 0.5 ? "assets/locs/minimain.png" : aspectRatio < 0.75 ? "assets/locs/main.png" : aspectRatio < 1 ? 'assets/locs/main2.png' : 'assets/locs/main3.png';

function GameHub() {
    const navigate = useNavigate();
    const { username, champion } = usePlayer();

    useEffect(() => {
        if (!champion) {
            navigate('champs');
        }
    }, [])

    return (
        <>
            <BackgroundImage src={imageSource} alt="Background" />
            <ButtonsWrapper>
                <ShopButton onClick={() => navigate('shop')} />
                <GateButton onClick={() => navigate('battle')} />
                <TavernButton onClick={() => navigate('champs')} />
            </ButtonsWrapper>

            {!username ? <WelcomeModal /> : <Header />}
        </>

    );
}

export default GameHub;