import styled, { keyframes } from "styled-components";

const pulseRing = keyframes`
    0% {
        transform: scale(0.8);
        opacity: 0.4;
    }
    100% {
        transform: scale(1.8);
        opacity: 0;
    }
`;

const bounce = keyframes`
    0%, 100% { 
        transform: translateY(0);
    }
    50% {
        transform: translateY(-4px);
    }
`;

export const ButtonsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    margin: auto;
    z-index: 1;
`;

const BaseButton = styled.button`
    position: absolute;
    pointer-events: auto;
    border: none;
    background: ${({ $bgColor }) => $bgColor || "transparent"};
    outline: none;
    padding: 0;
    transform-origin: center;
    border-radius: 14px;
    z-index: 3;

    &::before {
        content: '';
        position: absolute;
        top: -20%;
        left: -20%;
        width: 140%;
        height: 140%;
        background: ${({ $ringColor }) => $ringColor || "rgba(255, 255, 255, 0.1)"};
        border-radius: 50%;
        animation: ${pulseRing} 3s ease-out infinite;
        pointer-events: none;
        z-index: -1;
    }

    &::after {
        content: '${({ $icon }) => $icon || ""}';
        position: absolute;
        bottom: 40%;
        right: 20%;
        font-size: 1.4rem;
        opacity: 0.85;
        animation: ${bounce} 1.5s ease-in-out infinite;
        transition: opacity 0.3s ease;
    }
`;

export const ShopButton = styled(BaseButton).attrs({
    $bgColor: "rgba(153, 28, 28, 0.1)",
    $ringColor: "rgba(255, 100, 100, 0.125)",
    $icon: "🛒",
})`
    top: 65%;
    left: 80%;
    width: 20%;
    height: 20%;
`;

export const GateButton = styled(BaseButton).attrs({
    $bgColor: "rgba(47, 179, 47, 0.1)",
    $ringColor: "rgba(50, 200, 50, 0.125)",
    $icon: "⚔️",
})`
    top: 65%;
    left: 39%;
    width: 24%;
    height: 17%;
`;

export const TavernButton = styled(BaseButton).attrs({
    $bgColor: "rgba(61, 58, 207, 0.1)",
    $ringColor: "rgba(80, 80, 255, 0.125)",
    $icon: "🍻",
})`
    top: 62%;
    left: 0%;
    width: 24%;
    height: 23%;
`;

export const BackgroundWrapper = styled.picture`
    position: absolute;
    width: 100vw;
    height: 100vh;
    z-index: 0;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    z-index: 0;
`;

export const BirdsContainer = styled.div`
    position: relative;
    height: 300px;
    width: 100vw;
`