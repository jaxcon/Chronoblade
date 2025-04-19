import { createContext, useContext, useState } from "react";
import { calculateLvl, getStatsFromLvl } from "../components/Battle/championDataHandle";
import { usePlayer } from './PlayerContext';

const BattleContext = createContext();

export function BattleProvider({ children }) {
    const [player, setPlayer] = useState({});
    const [enemies, setEnemies] = useState([]);
    const [turnLog, setTurnLog] = useState([]);
    const [selectedAction, setSelectedAction] = useState("attack");
    const [overAllGold, setOverAllGold] = useState(0);
    const [overAllExp, setOverAllExp] = useState(0);
    //const [isPlayerTurn, setIsPlayerTurn] = useState(true);

    const { gold, setGold } = usePlayer();

    const logTurn = (actor) => {
        setTurnLog(prev => [...prev, actor]);
    };

    const resetBattle = () => {
        setPlayer({});
        setEnemies([]);
        setTurnLog([]);
        setSelectedAction("attack");
    };

    const handleEnemyKill = (exp, lootGold) => {
        const newXp = player.xp + exp;

        if (calculateLvl(newXp) > calculateLvl(player.xp)) {
            const newStats = getStatsFromLvl(calculateLvl(newXp), player.champClass)
            setPlayer({ ...player, xp: newXp, stats: newStats });
        } else {
            setPlayer({ ...player, xp: newXp })
        }

        setGold(gold + lootGold);

        setOverAllGold(overAllGold + lootGold);
        setOverAllExp(overAllExp + exp);
    }

    return (
        <BattleContext.Provider value={{
            player,
            enemies,
            turnLog,
            selectedAction,
            setPlayer,
            setEnemies,
            setSelectedAction,
            logTurn,
            resetBattle,
            handleEnemyKill,

        }}>
            {children}
        </BattleContext.Provider>
    );
}

export const useBattle = () => useContext(BattleContext);