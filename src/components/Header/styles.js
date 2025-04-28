import styled from "styled-components";

export const HeaderWrapper = styled.div`
    position: absolute;
    top: 2%;
    left: 3%;
    right: 3%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 12;
`;

export const SettingsButton = styled.button`
    width: 48px;
    height: 48px;
    background: rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(5px);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    z-index: 15;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 6px rgba(255, 255, 255, 0.3);
    }

    &:active {
        transform: scale(0.95);
    }
`;