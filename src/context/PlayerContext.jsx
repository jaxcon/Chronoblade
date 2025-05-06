import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { BattleProvider } from "./BattleContext";
import i18n from '../i18n';
import  WebApp from '@twa-dev/sdk';

const PlayerContext = createContext();

export function PlayerProvider({ children }) {
    const [chatId, setChatId] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const [username, setUsername] = useState("user");
    const [volume, setVolume] = useState(0.2);
    const [gold, setGold] = useState(null);
    const [selectedChampion, setSelectedChampion] = useState(null);
    const [champions, setChampions] = useState();
    const [items, setItems] = useState([]);

    
    useEffect(() => {
        const userTg = WebApp.initDataUnsafe.user;
        console.log(userTg)
        const userId = userTg.id;

        const initUser = async (userId) => {
            try {
                setIsLoading(true);

                setChatId(userId);

                const checkResponse = await fetch(`https://tonquest.space/api/users/${userId}`);
                const { exists, user } = await checkResponse.json();
                console.log(exists);
                console.log(user);

                if (exists) {
                    handleUser(user);
                } else {
                    console.log('Отправка запроса на создание пользователя...');

                    const response = await fetch('https://tonquest.space/api/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            chatId: userId
                        })
                    });

                    if (!response.ok) {
                        const errorData = await response.json();
                        throw new Error(errorData.error || 'Ошибка сервера');
                    }

                    const data = await response.json();
                    console.log("Пользователь создан:", data);
                    return data;
                }

            } catch (err) {
                console.error("Ошибка при создании пользователя:", err);
            } finally {
                setIsLoading(false); // Конец загрузки в любом случае
            }
        };

        initUser(userId);
    }, []);

    const handleUser = (user) => {
        setChampions(user.champions);
        setGold(user.gold);
        setItems(user.items);
        setUsername(user.nickname);
        setVolume(user.volume);
        i18n.changeLanguage(user.lang);
        setSelectedChampion(user.selectedChampion);
    }

    const setValue = async (params) => {
        try {
            const response = await fetch(`https://tonquest.space/api/users/${chatId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(params)
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error || 'Ошибка обновления');
            }
        } catch (err) {
            console.error("Ошибка при обновлении данных:", err);
            throw err;
        }
    }


    const updateUsername = async (name) => {
        setUsername(name);
        await setValue({
            nickname: name
        });
    };

    const updateVolume = async (newVolume) => {
        setVolume(newVolume);
        await setValue({
            volume: newVolume
        });
    };

    const updateChampion = async (champ) => {
        setSelectedChampion(champ);
        await setValue({
            selectedChampion: champ
        });
    }

    const updateLang = async (newLang) => {
        i18n.changeLanguage(newLang);
        await setValue({
            lang: newLang
        });
    }

    const updateGold = async (lootGold) => {
        const newGold = gold + lootGold;

        setGold(newGold);

        await setValue({
            gold: newGold
        });
    }

    const updateChampions = async (xp) => {
        let champs = [...champions];
        const champIndex = champs.findIndex(champ => champ.id === selectedChampion);
        champs[champIndex].xp += xp;
        setChampions(champs);
        console.log(champs);
        await setValue({
            champions: JSON.stringify(champs)
        });
    }

    const buyNewItem = async (itemId, price) => {
        try {
            await updateGold(-price)

            setItems(prevItems => prevItems.map(item => item.id === itemId
                ? { ...item, count: item.count + 1 }
                : item));
            await fetch(`https://tonquest.space/api/users/${chatId}/items`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ itemId })
            });

        } catch (err) {
            console.error("Ошибка при покупке предмета:", err);
        }
    };

    const getSelectedChamp = () => {
        return champions?.find(champ => champ.id === selectedChampion) || false;
    }

    const value = {
        username,
        volume,
        gold,
        updateUsername,
        updateVolume,
        updateChampion,
        setGold,
        items,
        buyNewItem,
        champions,
        setChampions,
        getSelectedChamp,
        selectedChampion,
        updateLang,
        updateGold,
        updateChampions,
        isLoading
    };

    return (
        <PlayerContext.Provider value={value}>
            <BattleProvider>
                {children}
            </BattleProvider>
        </PlayerContext.Provider>
    );
}

export const usePlayer = () => useContext(PlayerContext);