import { useEffect, useRef } from "react";

function BackgroundMusic({ volume = 0.5, shouldPlay }) {
    const audioRef = useRef(null);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio || !shouldPlay) return;

        audio.volume = volume;
        audio.loop = true;
        audio.play().catch(err => {
            console.warn("Autoplay blocked:", err);
        });

        return () => {
            audio.pause();
        };
    }, [shouldPlay, volume]);

    return (
        <audio ref={audioRef} src="assets/sounds/main.mp3" preload="auto" />
        );
}

export default BackgroundMusic;
