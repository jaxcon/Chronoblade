import { createContext, useContext, useState } from "react";
import { calculateLvl, getStatsFromLvl } from "../components/Battle/championDataHandle";
import { usePlayer } from './PlayerContext';

const BattleContext = createContext();

export function BattleProvider({ children }) {
    const [player, setPlayer] = useState({});
    const [enemies, setEnemies] = useState([]);
    const [selectedAction, setSelectedAction] = useState("attack");
    const [gameResult, setGameResult] = useState({});
    const [turns, setTurns] = useState([]);
    const [battleNumber, setBattleNumber] = useState([]);///////////////////////////////////////////////////////////////
    const { setGold } = usePlayer();

    const resetBattle = () => {
        setPlayer({});
        setEnemies([]);
        setTurns([]);
        setSelectedAction("attack");
        setGameResult({gold: 0, xp: 0, unitKills: 0})
    };

    const handleEnemyKill = (value) => {
        // const newXp = player.xp + value;

        // if (calculateLvl(newXp) > calculateLvl(player.xp)) {
        //     const newStats = getStatsFromLvl(calculateLvl(newXp), player.champClass)
        //     setPlayer({ ...player, xp: newXp, stats: newStats });
        // } else {
        //     setPlayer({ ...player, xp: newXp })
        // }

        // setGold(prevGold => prevGold + lootGold);

        setGameResult(prev => ({
            ...prev,
            gold: prev.gold + value/2,
            xp: prev.xp + value,
            unitKills: prev.unitKills + 1
        }));    

    }

    return (
        <BattleContext.Provider value={{
            player,
            enemies,
            selectedAction,
            setPlayer,
            setEnemies,
            setSelectedAction,
            resetBattle,
            handleEnemyKill,
            turns,
            setTurns,
            gameResult
        }}>
            {children}
        </BattleContext.Provider>
    );
}

export const useBattle = () => useContext(BattleContext);