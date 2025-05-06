import styled from 'styled-components';

export const OuterContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const StatsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    margin: 8px 0;
    width: fit-content;
`;

export const StatItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 14px;
    min-width: 70px;
`;

export const StatBar = styled.div`
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 3px;
    margin-top: 4px;
    overflow: hidden;
    width: 100%;
`;

export const StatFill = styled.div`
    height: 100%;
    background: ${props => props.color || '#4CAF50'};
    width: ${props => props.value}%;
`;
