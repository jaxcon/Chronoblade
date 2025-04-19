import styled from "styled-components";

export const BattleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #f0f0f0, #dcdcdc);
`;

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

export const PlayerSection = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2px 10px 5px 10px;
`;

export const PlayerImage = styled.img`
    width: auto;
    max-width: 80vw;
    height: 41vh;
    object-fit: contain;
`;

export const ActionPanel = styled.div`
    flex: 2;
    display: flex;
    justify-content: space-around;
`;

export const TurnHistory = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 8px;
    padding: 2px 4px 0px 4px;
    background: rgba(255, 255, 255, 0.1);
    border-top: 1px solid #ccc;
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

export const Avatar = styled.img`
    width: 78px;
    height: 78px;
    object-fit: contain;
    border-radius: 12px;
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