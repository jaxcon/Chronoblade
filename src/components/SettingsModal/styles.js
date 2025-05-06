import styled from "styled-components";

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const Modal = styled.div`
    background: rgba(30,30,47,0.85);
    border-radius: 16px;
    padding: 24px;
    width: 90%;
    max-width: 340px;
    color: white;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    text-align: center;
    position: relative;
`;

export const Title = styled.h2`
    font-size: 20px;
    margin-bottom: 16px;
`;

export const FlagsWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 24px;
    margin-bottom: 24px;
`;

export const FlagButton = styled.button`
    font-size: 32px;
    background: none;
    border: none;
    cursor: pointer;
    filter: ${({ selected }) => (selected ? "drop-shadow(0 0 5px #fff)" : "none")};

    &:hover {
        transform: scale(1.1);
    }
`;

export const VolumeSlider = styled.input`
    width: 100%;
    margin-bottom: 24px;
    accent-color: #5ac8fa;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 8px;
    right: 12px;
    background: none;
    border: none;
    font-size: 32px;
    color: #ccc;
    cursor: pointer;

    &:hover {
        color: white;
    }
`;