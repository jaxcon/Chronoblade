import styled from "styled-components";

export const BattleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #e2e6ea, #c5ccd3);
    
`;
//linear-gradient(to bottom, #f0f0f0, #dcdcdc);
export const TurnHistory = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    padding: 2px 4px 0px 4px;
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid #ccc;
`;

export const Avatar = styled.img`
    width: 78px;
    height: 78px;
    object-fit: contain;
    border-radius: 12px;
`;