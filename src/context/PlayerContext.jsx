import { createContext, useContext, useState, useEffect } from "react";
import { BattleProvider } from "./BattleContext";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [username, setUsername] = useState("vitalik123");
    const [volume, setVolume] = useState(0.2);
    const [kills, setKills] = useState(0);
    const [gold, setGold] = useState(0);
    const [champion, setChampion] = useState('draygar');
    const [xp, setXp] = useState(0);

    useEffect(() => {
        //
    }, []);

    const updateUsername = (name) => {
        setUsername(name);
    };

    const updateVolume = (newVolume) => {
        setVolume(newVolume);
    };

    const updateChampion = (champ) => {
        setChampion(champ);
    }

    return (
        <PlayerContext.Provider value={{
            username,
            volume,
            kills,
            gold,
            updateUsername,
            updateVolume,
            updateChampion,
            champion,
            xp,
            setXp,
            setGold
        }}>
            <BattleProvider>
                {children}
            </BattleProvider>
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => useContext(PlayerContext);