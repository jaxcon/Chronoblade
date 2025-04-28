import styled from "styled-components";

export const PlayerSection = styled.div`
    flex: 3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding: 2px 10px 5px 10px;
`;

export const PlayerWrapper = styled.div`
    display: "flex";
    flexDirection: "column";
    alignItems: "center";
    position: relative;
    justify-content: center;
    height: 100%;
`

export const PlayerImage = styled.img`
    width: auto;
    max-width: 80vw;
    height: 41vh;
    object-fit: contain;
`;

export const HPBarWrapper = styled.div`
    width: 100%;
    height: 16px;
    background-color: #222;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    border: 1px solid #555;
`;

export const HPBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $hpPercent }) => $hpPercent}%;
    background: ${({ $hpPercent }) => {
        if ($hpPercent < 30) return 'linear-gradient(90deg, #ff5252, #d32f2f)';
        if ($hpPercent < 70) return 'linear-gradient(90deg, #ffeb3b, #fbc02d)';
        return 'linear-gradient(90deg, #00e676, #00c853)';
    }};
    z-index: 1;
`;

export const ShieldBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${({ $shieldPercent }) => $shieldPercent}%;
    background: rgba(66, 165, 245, 0.7);
    box-shadow: 0 0 6px rgba(66, 165, 245, 0.8);
    z-index: 2;
`;

export const HPText = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 10px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    text-shadow: 0 0 2px #000;
    z-index: 3;
`;