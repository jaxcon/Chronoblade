import styled, { keyframes} from 'styled-components';

const flapAnimation = keyframes`
    0%, 100% { transform: rotate(0deg); }
    50% { transform: rotate(15deg); }
`;

const flyAnimation = keyframes`
    0% { transform: translateX(-100px) translateY(0); }
    100% { transform: translateX(calc(100vw + 100px)) translateY(-100px); }
`;

export const BirdContainer = styled.div`
    position: absolute;
    width: ${props => props.$size || '180px'};
    height: ${props => props.$size || '810px'};
    top: ${props => props.$top || '30%'};
    left: ${props => props.$left || '10%'};
    animation: ${flyAnimation} ${props => props.$duration || '20s'} linear infinite;
    z-index: 10;
`;

export const BirdBody = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

export const Head = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    background: #333;
    border-radius: 50%;
    top: 15%;
    left: 55%;
    z-index: 3;
`;

export const Body = styled.div`
    position: absolute;
    width: 50%;
    height: 40%;
    background: #222;
    border-radius: 50% 50% 40% 40%;
    top: 30%;
    left: 25%;
    z-index: 2;
`;

export const Wing = styled.div`
    position: absolute;
    width: 60%;
    height: 40%;
    background: #111;
    border-radius: 50% 50% 20% 20%;
    top: 25%;
    left: 20%;
    transform-origin: right center;
    animation: ${flapAnimation} 0.8s ease-in-out infinite;
    z-index: 1;
`;

export const Tail = styled.div`
    position: absolute;
    width: 20%;
    height: 15%;
    background: #111;
    border-radius: 50% 0 0 50%;
    top: 45%;
    left: 15%;
    transform: rotate(-20deg);
    z-index: 1;
`;

export const Eye = styled.div`
    position: absolute;
    width: 30%;
    height: 30%;
    background: white;
    border-radius: 50%;
    top: 30%;
    left: 50%;
`;

export const Beak = styled.div`
    position: absolute;
    width: 15%;
    height: 8%;
    background: #ff9900;
    top: 45%;
    left: 80%;
    border-radius: 0 50% 50% 0;
`;