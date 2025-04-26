import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { BattleProvider } from "./BattleContext";
import { useMemo } from "react";

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [username, setUsername] = useState("vitalik123");
    const [volume, setVolume] = useState(0.2);
    const [kills, setKills] = useState(0);
    const [gold, setGold] = useState(2340);
    const [champion, setChampion] = useState('draygar');
    const [xp, setXp] = useState(1110);
    const [items, setItems] = useState([
        {
            id: 'bloodAmulet',
            count: 10
        },
        {
            id: 'fateShield',
            count: 2
        }
    ]);

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

    const buyNewItem = useCallback((itemId, price) => {
        setGold(prevGold => prevGold - price);

        setItems(prevItems => {
            const existingItem = prevItems.find(i => i.id === itemId);

            if (existingItem) {
                return prevItems.map(i =>
                    i.id === itemId ? { ...i, count: i.count + 1 } : i
                );
            } else {
                return [...prevItems, { id: itemId, count: 1 }];
            }
        });
    }, []);

    const value = useMemo(() => ({
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
        setGold,
        items,
        buyNewItem
    }), [username, volume, kills, gold, champion, xp, items]);

    return (
        <PlayerContext.Provider value={value}>
            <BattleProvider>
                {children}
            </BattleProvider>
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => useContext(PlayerContext);