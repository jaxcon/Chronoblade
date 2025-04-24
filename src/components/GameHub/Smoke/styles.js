import styled from "styled-components";

export const SmokeSVG = styled.svg`
    position: absolute;
    top: 29.5vh;
    left: 13vw;
    width: 42px;
    height: 100px;
    z-index: 2;
    pointer-events: none;

    .smoke {
        fill: #7b7373;
        opacity: 0.5;
        animation: float 4s ease-in-out infinite;
    }

    @keyframes float {
        0% {
            transform: translateY(0) scale(1);
            opacity: 0.6;
        }
        50% {
            transform: translateY(-20px) scale(1.1);
            opacity: 0.3;
        }
        100% {
            transform: translateY(-40px) scale(1.2);
            opacity: 0;
        }
    }

    @media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 3/4){
        top: 28.75vh;
    }

    @media (min-height: 720px) and not (max-aspect-ratio: 1/2){
        top: 31.5vh;
    }

    @media (min-aspect-ratio: 1/2) and (max-aspect-ratio: 3/4) and (min-height: 721px){
        top: 30vh;
    }

    @media (min-width: 320px) and (max-width: 345px){
        left: 8vw;
    } 

    @media (min-width: 720px){
        left: 15.25vw;
    }

`;