import styled from "styled-components";

export const ActionPanel = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-around;
    padding-block: 4px;
`;

export const ActionButton = styled.button`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-width: 33vw;

    background: ${({ selected }) => (selected ? "#e0f0ff" : "none")};
    border: ${({ selected }) => (selected ? "2px solid #3399ff" : "none")};
    border-radius: 12px;

    cursor: pointer;

    color: #333;
    font-size: 14px;
    font-weight: 600;

    transition: all 0.2s ease;

    &:hover {
        opacity: 0.8;
    }

    img {
        width: 32px;
        height: 32px;
        margin-bottom: 4px;
    }
`;