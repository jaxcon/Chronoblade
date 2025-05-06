import { createContext, useContext, useState } from "react";
import { calculateLvl, getStatsFromLvl } from "../utils/championDataHandle";
import { usePlayer } from './PlayerContext';

const BattleContext = createContext();

export function BattleProvider({ children }) {
    const [player, setPlayer] = useState({});
    const [enemies, setEnemies] = useState([]);
    const [selectedAction, setSelectedAction] = useState("attack");
    const [gameResult, setGameResult] = useState({});
    const [turns, setTurns] = useState({ queue: [], turnOrder: 0, cooldowns: [{ skill: 'name', rounds: 1 }, { skill: 'name', rounds: 1 }] });
    const [battleNumber, setBattleNumber] = useState(1);
    const { updateGold, updateChampions } = usePlayer();
    const [attackEffects, setAttackEffects] = useState([]);
    const [usableItems, setUsableItems] = useState([]);

    const addAttackEffect = (effect) => {
        const id = crypto.randomUUID();
        setAttackEffects(prev => [...prev, { ...effect, id }]);

        setTimeout(() => {
            setAttackEffects(prev => prev.filter(e => e.id !== id));
        }, 1000);
    };

    const resetBattle = () => {
        setPlayer({});
        setEnemies([]);
        setTurns({ queue: [], turnOrder: 0 });
        setSelectedAction("attack");
        setGameResult({ gold: 0, xp: 0, unitKills: 0 })
        setBattleNumber(1);
    };

    const handleEnemyKill = async (value) => {

        setGameResult(prev => ({
            ...prev,
            gold: Math.ceil(prev.gold + value / 2),
            xp: prev.xp + value,
            unitKills: prev.unitKills + 1
        }));

        await updateChampions(value);

        await updateGold(Math.floor(value / 2));
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
            gameResult,
            setAttackEffects,
            attackEffects,
            addAttackEffect,
            setBattleNumber,
            battleNumber,
            usableItems,
            setUsableItems
        }}>
            {children}
        </BattleContext.Provider>
    );
}

export const useBattle = () => useContext(BattleContext);