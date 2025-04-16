import { useState } from 'react';
import Header from '../components/Header/Header';
import GameHub from '../components/GameHub/GameHub';
import {
    Wrapper,
    BackgroundImage,
} from './MainScreen.styled';
import BackgroundMusic from '../components/BackgroundMusic';
import { usePlayer } from '../context/PlayerContext';

const aspectRatio = window.innerWidth / window.innerHeight;
const imageSource = aspectRatio < 0.5 ? "assets/locs/minimain.png" : aspectRatio < 0.75 ? "assets/locs/main.png" : aspectRatio < 1 ? 'assets/locs/main2.png' : 'assets/locs/main3.png';

function MainScreen() {
    const [soundReady, setSoundReady] = useState(false);
    const { volume, username } = usePlayer();

    return (
        <Wrapper onClick={() => setSoundReady(true)}>
            <BackgroundImage src={imageSource} alt="Background" />

            {username !== '' ? <Header /> : null}
            <GameHub />

            <BackgroundMusic shouldPlay={soundReady} volume={volume} />
        </Wrapper>
    );
}

export default MainScreen;