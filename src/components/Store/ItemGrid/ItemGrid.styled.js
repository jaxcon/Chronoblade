import styled from "styled-components";

export const ItemsWrapper = styled.div`
    height: calc(100vh - 100px - 1rem);
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 1rem;
    padding: 0.5rem;
    box-sizing: border-box;
`;

export const ItemCard = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5rem;
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
    margin-bottom: 0.25rem;
    object-fit: contain;
    height: 40%;
    @media (min-height: 768px) {
        height: 60%;
    }
`;

export const ItemName = styled.div`
    font-weight: 600;
    font-size: 0.925rem;
    margin-bottom: 0.2rem;
`;

export const ItemStats = styled.div`
    font-size: 0.85rem;
    color: #666;
    margin-bottom: 0.75rem;
`;


export const BuyButton = styled.button`
    background: #4caf50;
    color: #fff;
    border: none;
    border-radius: 0.5rem;
    padding: 0.4rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.2s;
    font-size: 0.825rem;

    &:hover:enabled {
        background: #43a047;
    }

    &:disabled {
        background: #ccc;
        cursor: default;
    }

    &:not(:disabled):active {
        transform: scale(0.95);
    }
`;