import styled from "styled-components";

export const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(5px);
    border-radius: 12px;
    padding: 6px 10px;
    color: white;
    z-index: 15;
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 6px;
    z-index: 15;
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 600;
    cursor: default;
    z-index: 15;
`;