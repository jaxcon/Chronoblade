import { useEffect, useState, useRef } from 'react';
import { usePlayer } from './context/PlayerContext';
import styled from 'styled-components';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`;

function AppWrapper({ children }) {
    const { volume } = usePlayer();
    const audioRef = useRef(null);
    const [isAudioStarted, setIsAudioStarted] = useState(false);

    useEffect(() => {
        const handleUserInteraction = () => {
            if (!isAudioStarted && audioRef.current) {
                audioRef.current.volume = volume;
                audioRef.current.play().catch(console.error);
                setIsAudioStarted(true);
                document.removeEventListener('click', handleUserInteraction);
            }
        };

        document.addEventListener('click', handleUserInteraction);
        return () => {
            document.removeEventListener('click', handleUserInteraction);
        };
    }, [isAudioStarted]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
        }
    }, [volume]);

    return (
        <Wrapper>
            <audio ref={audioRef} src="assets/sounds/main.mp3" loop preload="auto" />
            {children}
        </Wrapper>
    );
}

export default AppWrapper;