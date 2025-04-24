import styled from "styled-components";

export const TurnsRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 0px;
    background: rgba(255, 255, 255, 0.1);
    border-top: 2px solid #ccc;
`;

export const AvatarsWrapper = styled.div`
    display: flex;
    gap: 4px;
`;

export const Avatar = styled.img`
    width: 16vw;
    height: auto;
    aspect-ratio: 1 / 1;
    object-fit: contain;
    border-radius: 12px;
`;

export const Separator = styled.div`
    width: 2px;
    height: 60%;
    background-color: #ccc;
    margin: 0 4px;
    opacity: 0.6;
`;