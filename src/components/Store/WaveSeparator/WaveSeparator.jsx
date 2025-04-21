import { WaveWrapper, WaveSVG } from './WaveSeparator.styled';

const WaveSeparator = () => (
    <WaveWrapper>
        <WaveSVG viewBox="0 0 500 80" preserveAspectRatio="none">
            <path d="M0,30 C150,80 350,0 500,30 L500,00 L0,0 Z" fill="#aab3bb" />
        </WaveSVG>
    </WaveWrapper>
);

export default WaveSeparator;
