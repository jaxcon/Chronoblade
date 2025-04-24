import styled from "styled-components";

export const TopInfo = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    top: 8px;
    left: 8px;
    right: 8px;
    font-size: 14px;
    font-weight: bold;
    color: #555;
`;

export const BoughtCount = styled.span`
    background: #d1f7d6;
    padding: 2px 6px;
    border-radius: 8px;
`;

export const StockCount = styled.span`
    background: #fce5e5;
    padding: 2px 6px;
    border-radius: 8px;
`;