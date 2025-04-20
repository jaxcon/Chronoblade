import styled from "styled-components";

export const ShopWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    background: linear-gradient(to bottom, #f9f9f9, #e0e0e0);
    min-height: 100vh;
`;

export const CurrencyHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 6px 0;
`;

export const CurrencyAmount = styled.span`
    font-size: 20px;
    font-weight: bold;
    color: #222;
`;

export const ItemGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
    padding-top: 10px;
`;

export const ItemCard = styled.div`
    background: white;
    border-radius: 16px;
    padding: 10px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    gap: 6px;
    justify-content: space-between;
`;

export const ItemName = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #333;
`;

export const ItemStats = styled.div`
    font-size: 14px;
    color: #666;
`;

export const StockInfo = styled.div`
    font-size: 12px;
    color: #999;
`;

export const BuyButton = styled.button`
    margin-top: auto;
    background: #4caf50;
    color: white;
    padding: 6px 8px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: 600;
    transition: background 0.2s;

    &:hover:enabled {
        background: #43a047;
    }

    &:disabled {
        background: #ccc;
        cursor: default;
    }
`;
