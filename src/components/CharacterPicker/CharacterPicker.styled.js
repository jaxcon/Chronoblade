import styled from "styled-components";

export const Wrapper = styled.div`
    height: 100vh;
    max-height: 100vh;
    overflow: hidden;
    background: linear-gradient(135deg, black 0%, gray 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;


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
    padding-bottom: 2px;
    font-size: 20px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const Image = styled.img`
    width: 100%;
    max-height: 50vh;
    object-fit: contain;
    margin: 4px 0;
`;

export const Stats = styled.div`
    margin: 8px 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 6px;
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
`;

export const StatRow = styled.div`
    display: flex;
    align-items: center;
    font-size: 16px;
    color: white;
    gap: 8px;

    .icon {
        width: 24px;
        text-align: center;
        flex-shrink: 0;
    }

    .label {
        text-align: left;
        width: 70px;
    }
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

export const NavDots = styled.div`
    margin: 10px 0 24px 0;
    display: flex;
    gap: 12px;
`;

export const Dot = styled.div`
    width: 14px;
    height: 14px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.3)')};
    transition: background-color 0.3s;
    cursor: pointer;
`;