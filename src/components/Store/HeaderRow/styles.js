import styled from "styled-components";

export const HeaderContainer = styled.div`
    margin: 3px 0 12px;
    padding: 2px 14px 14px;
    border-radius: 12px;
    border-bottom-right-radius: 0px;
    background: linear-gradient(to bottom, #e2e6ea, #c5ccd3);
    position: relative;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 11px;
`;

export const TopRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2px;
`;

export const CurrencyGroup = styled.div`
    display: flex;
    gap: 8px;
`;

export const CurrencyIcon = styled.img`
    width: 28px;
    height: 28px;
`;

export const CurrencyAmount = styled.span`
    font-size: 20px;
    font-weight: 650;
    color: #222;
`;

export const BackButton = styled.button`
    position: absolute;
    top: 3px;
    right: 8px;
    width: 36px;
    height: 36px;
    background: rgba(255, 255, 255, 0.4);
    backdrop-filter: blur(4px);
    border: 2px solid #b2bac2;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 5;

    img {
        width: 22px;
        height: 22px;
    }

    &:hover {
        background: rgba(255, 255, 255, 0.6);
        border-color: rgba(255, 255, 255, 0.9);
        transform: scale(1.05);
    }
    &.clicked {
        opacity: 0;
        transform: scale(0.8);
    }
`;

export const StatBar = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
`;

export const StatItem = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    min-width: 60px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 2px;
    margin: 2px 0;
    background: linear-gradient(to right, #d0d4da, #bfc5cc);
    border-radius: 4px;
`;