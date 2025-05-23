import styled from "styled-components";

export const EnemySection = styled.div`
    flex: 3;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    height: 36vh;
`;

export const EnemyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 30vw;
    height: 100%;
    position: relative;
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
    background-color: #222;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    border: 1px solid #555;
    z-index: 1;
`;

export const HPBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${props => props.$hpPercent}%;
    background: ${({ $hpPercent }) => {
        if ($hpPercent < 30) return 'linear-gradient(90deg, #ff5252, #d32f2f)';
        if ($hpPercent < 70) return 'linear-gradient(90deg, #ffeb3b, #fbc02d)';
        return 'linear-gradient(90deg, #00e676, #00c853)';
    }};
    transition: width 0.3s ease;
    z-index: 2;
`;

export const HPText = styled.div`
    position: relative;
    z-index: 3;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    text-shadow: 0 0 2px #000;
`;