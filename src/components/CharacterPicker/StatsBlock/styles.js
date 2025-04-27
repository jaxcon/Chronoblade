import styled from "styled-components";

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