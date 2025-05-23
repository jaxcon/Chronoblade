import styled, { keyframes } from "styled-components";

const hitAnimation = keyframes`
    0% { transform: translateY(0px); opacity: 1; }
    50% { transform: translateY(-10px); opacity: 1; }
    100% { transform: translateY(-20px); opacity: 0; }
`;

const killAnimation = keyframes`
    0% { 
        transform: translateY(0) scale(1); 
        opacity: 1;
        filter: brightness(1);
    }
    50% { 
        transform: translateY(-15px) scale(1.1);
        filter: brightness(1.5);
    }
    100% { 
        transform: translateY(-30px) scale(0.9);
        opacity: 0;
        filter: brightness(0.5);
    }
`;

export const ActionContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 12px;
    background: rgba(30, 30, 45, 0.6);
    border-radius: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.7), inset 0 0 5px rgba(255, 255, 255, 0.05);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
`;

export const ActionContent = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 101;
    animation: ${hitAnimation} 1s ease forwards;
`;

export const DamageText = styled.div`
    color: #ff4c4c;
    font-weight: bold;
    font-size: 28px;
    text-shadow: 0 0 4px #000;
    pointer-events: none;
    position: relative;
    animation: pulseDamage 0.5s ease-in-out infinite alternate;

    @keyframes pulseDamage {
        from { transform: scale(1); opacity: 1; }
        to { transform: scale(1.2); opacity: 0.8; }
    }
`;

export const KillAvatar = styled.img`
    position: absolute;
    height: 64px;
    width: 64px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid #ff4c4c;
    animation: ${killAnimation} 1s ease forwards;
`;

export const KillOverlay = styled.img`
    position: absolute;
    height: 64px;
    width: 64px;
    filter: drop-shadow(0 0 4px #ff0000);
    animation: 
        ${killAnimation} 1s ease forwards,
        pulse 0.5s ease infinite alternate;
    
    @keyframes pulse {
        from { transform: scale(1); opacity: 0.8; }
        to { transform: scale(1.2); opacity: 1; }
    }
`;

export const ActionIcon = styled.img`
    margin-top: 20px;
    height: 64px; 
    width: 64px;
`;

export const ShieldText = styled.div`
    color:rgb(103, 73, 236);
    font-weight: bold;
    font-size: 28px;
    text-shadow: 0 0 4px #000;
    pointer-events: none;
`;

const healAnimation = keyframes`
    0% { transform: scale(0.8); opacity: 0; }
    50% { transform: scale(1.2); opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
`;

export const HealEffect = styled.div`

    font-size: 24px;
    color: #4dff88;
    text-shadow: 0 0 8px rgba(0, 255, 100, 0.7);
    animation: ${healAnimation} 0.8s ease-out forwards;
    pointer-events: none;
    z-index: 90; // Ниже основных эффектов
`;