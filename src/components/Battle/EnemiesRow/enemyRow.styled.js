import styled from "styled-components";

export const EnemySection = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    column-gap: 6px;
    height: 36vh;
`;

export const EnemyImage = styled.img`
    width: auto;
    max-width: 100%;
    object-fit: contain;
    max-height: 90%;
`;

export const HPBarWrapper = styled.div`
    width: 100%;
    height: 14px;
    background-color: #ddd;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
`;

export const HPBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $hpPercent }) => $hpPercent}%;
    background-color: ${({ $hpPercent }) =>
        $hpPercent > 50 ? "#4caf50" : $hpPercent > 25 ? "#ff9800" : "#f44336"};
    transition: width 0.3s ease;
    z-index: 1;
`;

export const HPText = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
    color: #000;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
`;

export const EnemyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30vw;
    height: 100%;
`;