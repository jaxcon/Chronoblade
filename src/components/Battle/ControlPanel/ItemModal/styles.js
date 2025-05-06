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

export const ItemsList = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 60vh;
    overflow-y: auto;
    padding-right: 8px;
`;

export const Item = styled.div`
    display: flex;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 12px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const ItemButton = styled.button`
    display: flex;
    align-items: center;
    width: 100%;
    padding: 12px;
    background: none;
    border: none;
    cursor: pointer;
    text-align: left;
    color: inherit;
`;

export const ItemIcon = styled.div`
    font-size: 28px;
    margin-right: 16px;
    flex-shrink: 0;
`;

export const ItemInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ItemName = styled.div`
    font-weight: bold;
    font-size: 16px;
    color: #b0c4de;
`;

export const ItemDescription = styled.div`
    font-size: 14px;
    color: #a0a0a0;
    margin: 4px 0;
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