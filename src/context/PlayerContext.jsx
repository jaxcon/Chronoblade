import { createContext, useContext, useState, useEffect } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [username, setUsername] = useState("");
    const [volume, setVolume] = useState(0);
    const [kills, setKills] = useState(1);
    const [gold, setGold] = useState(100);

    useEffect(() => {
        //
    }, []);

    const updateUsername = (name) => {
        setUsername(name);
    };

    const updateVolume = (newVolume) => {
        setVolume(newVolume);
    };

    return (
        <PlayerContext.Provider value={{ username, volume, kills, gold, updateUsername, updateVolume}}>
            {children}
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => useContext(PlayerContext);
