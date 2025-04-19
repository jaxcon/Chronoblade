import styled from "styled-components";

export const ButtonsWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: 620 / 1102;
    margin: auto;
    z-index: 1;
`;

const BaseButton = styled.button`
    position: absolute;
    pointer-events: auto;
    border: none;
`;

export const ShopButton = styled(BaseButton)`
    background: rgba(153, 28, 28, 0.5);
    top: 65%;
    left: 80%;
    width: 20%;
    height: 20%;
`;

export const GateButton = styled(BaseButton)`
    background: rgba(47, 179, 47, 0.2);
    top: 65%;
    left: 39%;
    width: 24%;
    height: 17%;
`;

export const TavernButton = styled(BaseButton)`
    background: rgba(61, 58, 207, 0.2);
    top: 62%;
    left: 0%;
    width: 24%;
    height: 23%;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
`;