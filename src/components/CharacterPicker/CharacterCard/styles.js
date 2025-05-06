import styled from "styled-components";

export const SwipeArea = styled.div`
    width: 100%;
    height: 100vh;
    border-radius: 20px;
    overflow: hidden;
`;

export const Card = styled.div`
    padding-inline: 20px;
    color: white;
    text-align: center;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const Name = styled.h2`
    font-size: 20px;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 50vh;
    object-fit: contain;
    margin: 4px 0;
`;

export const Description = styled.p`
    font-size: 14px;
    margin-top: 8px;
`;

export const ChooseButton = styled.button`
    margin-top: 6px;
    padding: 16px 20px;
    font-weight: bold;
    background: #ffc107;
    border: none;
    border-radius: 8px;
    cursor: pointer;
`;