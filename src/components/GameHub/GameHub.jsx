import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { usePlayer } from '../../context/PlayerContext';
import {
    ButtonsWrapper,
    ShopButton,
    GateButton,
    TavernButton
} from './GameHub.styled';

import WelcomeModal from '../WelcomeModal/WelcomeModal';

function GameHub() {
    const navigate = useNavigate();
    const { username } = usePlayer();

    useEffect(() => {

    }, [])

    return (
        <>
            <ButtonsWrapper>
                <ShopButton onClick={() => navigate('')} />
                <GateButton onClick={() => navigate('battle')} />
                <TavernButton onClick={() => navigate('')} />
            </ButtonsWrapper>

            {!username ? <WelcomeModal /> : null}
        </>

    );
}

export default GameHub;