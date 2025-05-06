import { useEffect } from "react";
import { playSoundByName } from "../utils/soundManager";
import { usePlayer } from "../context/PlayerContext";


export const useBattleOver = (player, enemies, setIsGameOver, setIsBattleWin) => {
    const { volume } = usePlayer();

    useEffect(() => {
        if (player?.currentHealth < 1) {
            setTimeout(() => {
                playSoundByName('lose', volume);
                setIsGameOver(true);
            }, 850);
        }
    }, [player?.currentHealth]);

    useEffect(() => {
        if (enemies?.length === 0 && player?.currentHealth > 0) {
            setTimeout(() => {
                playSoundByName('win', volume);
                setIsBattleWin(true);
            }, 850);
        }
    }, [enemies]);
};