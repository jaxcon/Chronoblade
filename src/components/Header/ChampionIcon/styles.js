import styled from "styled-components";

export const InfoBlock = styled.div`
    display: flex;
    align-items: center;
    background: rgba(0,0,0,0.3);
    backdrop-filter: blur(5px);
    border-radius: 12px;
    padding: 6px 10px;
    color: white;
`;

export const Icon = styled.img`
    width: 20px;
    height: 20px;
    margin-right: 6px;
`;

export const Label = styled.span`
    font-size: 14px;
    font-weight: 600;
`;