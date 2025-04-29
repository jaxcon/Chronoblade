import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
    from { opacity: 0; transform: scale(0.9); }
    to   { opacity: 1; transform: scale(1); }
`;

const skullPulse = keyframes`
    0%, 100% { 
        transform: scale(1) rotate(0deg);
        filter: drop-shadow(0 0 8px rgba(255, 50, 50, 0.7));
    }
    50% { 
        transform: scale(1.1) rotate(5deg);
        filter: drop-shadow(0 0 15px rgba(255, 0, 0, 0.9));
    }
`;

const textGlow = keyframes`
    0%, 100% { text-shadow: 0 0 8px rgba(255, 100, 100, 0.7); }
    50% { text-shadow: 0 0 15px rgba(255, 50, 50, 0.9); }
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
    box-shadow: 0 0 24px rgba(255, 0, 0, 0.4);
    animation: ${fadeIn} 0.4s ease-out forwards;
`;

export const ModalTitle = styled.h2`
    font-size: 28px;
    margin-bottom: 16px;
    color: #ff4d4d;
    animation: ${textGlow} 2s ease-in-out infinite;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const DefeatIcon = styled.div`
    font-size: 48px;
    margin: 16px 0;
    animation: ${skullPulse} 2s ease-in-out infinite;
    transform-origin: center;
    cursor: default;
`;

export const ModalStats = styled.div`
    margin-bottom: 24px;
    font-size: 16px;
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
    background: #ffc107;
    color: black;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    margin: 0 8px;
    
    &:hover {
        background: #ffda44;
        transform: scale(1.05);
    }
  }
`;