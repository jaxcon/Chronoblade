import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    from { opacity: 0; transform: scale(0.95); }
    to { opacity: 1; transform: scale(1); }
`;

export const ModalOverlay = styled.div`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(3px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
`;

export const ModalContent = styled.div`
    background: #2a2d34; /* тёмно-серый фон */
    color: #f0f0f0;
    padding: 32px;
    border-radius: 16px;
    text-align: center;
    max-width: 400px;
    width: 90%;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.5);
    animation: ${fadeIn} 0.3s ease-out forwards;
`;

export const ModalTitle = styled.h2`
    font-size: 24px;
    margin-bottom: 24px;
    color: #b0c4de; /* светлый холодный оттенок */
    text-transform: uppercase;
    letter-spacing: 1px;
`;

export const SkillsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const SkillItem = styled.div`
    display: flex;
    flex-direction: column;
`;

export const SkillButton = styled.button`
    background: #39404a;
    border: none;
    border-radius: 12px;
    padding: 16px;
    text-align: left;
    cursor: pointer;
    color: white;
    transition: background 0.2s;

    &:hover {
        background: #4a5568;
    }
`;

export const SkillName = styled.div`
    font-size: 18px;
    font-weight: bold;
`;

export const SkillDescription = styled.div`
    font-size: 14px;
    color: #c0c0c0;
    margin-top: 6px;
`;

export const CancelButton = styled.button`
    margin-top: 24px;
    padding: 12px 24px;
    background: transparent;
    border: 1px solid #888;
    color: #ccc;
    font-size: 16px;
    border-radius: 10px;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
        background: #555;
    }
`;
