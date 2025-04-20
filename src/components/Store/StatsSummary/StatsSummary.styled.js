import styled from "styled-components";

export const StatsWrapper = styled.div`
    margin-top: 12px;
    padding: 4px 16px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 0 4px rgba(0,0,0,0.08);
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

export const StatRow = styled.div`
    display: flex;
    justify-content: space-between;
    font-weight: 600;
    color: #333;
`;

export const StatLabel = styled.span`
    color: #666;
`;