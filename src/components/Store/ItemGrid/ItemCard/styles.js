import styled, { keyframes } from "styled-components";

const shine = keyframes`
    0% { transform: translateX(-100%) rotate(30deg); }
    100% { transform: translateX(100%) rotate(30deg); }
`;

export const ItemCardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.55rem;
    background: #e6edf3;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    overflow: hidden;
    position: relative;
`;

export const ItemImage = styled.img`
    width: 100%;
    border-radius: 0.25rem;
    margin-bottom: 0.3rem;
    object-fit: contain;
    height: 40%;
    @media (min-height: 768px) {
        height: 60%;
    }
`;

export const ItemName = styled.div`
    font-weight: 600;
    font-size: 0.825rem;
    margin-bottom: 0.3rem;
`;

export const ItemStats = styled.div`
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 0.75rem;
`;

export const BuyButton = styled.button`
    background: linear-gradient(145deg, #4caf50, #388e3c);
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.4rem 1rem;
    font-weight: 700;
    cursor: pointer;
    font-size: 0.9rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 2px 5px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
    z-index: 1;
    min-width: 80px;

    &:active:enabled {
        transform: translateY(1px) scale(0.98);
        box-shadow: 0 1px 3px rgba(0,0,0,0.2);
    }

    &:disabled {
        background: linear-gradient(145deg, #9e9e9e, #757575);
        color: #e0e0e0;
        cursor: not-allowed;
        transform: none !important;
    }

    &::before {
        content: '';
        position: absolute;
        top: -50%;
        left: -50%;
        width: 200%;
        height: 200%;
        background: linear-gradient(
            to bottom right,
            rgba(255,255,255,0) 45%,
            rgba(255,255,255,0.8) 50%,
            rgba(255,255,255,0) 55%
        );
        transform: rotate(30deg);
        pointer-events: none;
        opacity: 0;
    }

    &.clicked::before {
        animation: ${shine} 0.5s ease-in-out forwards;
        opacity: 1;
    }
`;