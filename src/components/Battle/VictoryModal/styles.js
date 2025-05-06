import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
`;

const victoryGlow = keyframes`
    0%, 100% { text-shadow: 0 0 8px rgba(100, 255, 100, 0.7); }
    50% { text-shadow: 0 0 15px rgba(50, 255, 50, 0.9); }
`;

const trophyShine = keyframes`
    0%, 100% { 
        transform: scale(1);
        filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.7));
    }
    50% { 
        transform: scale(1.1);
        filter: drop-shadow(0 0 15px rgba(255, 255, 0, 0.9));
    }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(5px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ModalContent = styled.div`
    background: #1e1e1e;
    color: white;
    padding: 32px;
    border-radius: 16px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 0 24px rgba(0, 255, 0, 0.4);
    animation: ${fadeIn} 0.4s ease-out forwards;
`;

export const ModalTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 16px;
    color: #4dff4d;
    animation: ${victoryGlow} 2s ease-in-out infinite;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const VictoryIcon = styled.div`
    font-size: 48px;
    margin: 16px 0;
    animation: ${trophyShine} 2s ease-in-out infinite;
    cursor: default;
`;

export const ModalStats = styled.div`
    line-height: 1.5;
`;

export const StatItem = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px 0;
    font-size: 18px;
`;

export const StatIcon = styled.span`
    margin-right: 12px;
    font-size: 24px;
`;

export const ButtonGroup = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 24px;
    gap: 16px;
`;

export const ModalButton = styled.button`
    flex: 1;
    background: #4CAF50;
    color: white;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 8px;
    transition: transform 0.3s ease;
    
    &:hover {
        background: #66BB6A;
        transform: scale(1.05);
    }
`;