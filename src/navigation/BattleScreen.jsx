import { useNavigate } from 'react-router-dom';
import Battle from '../components/Battle/Battle';
import { useBattle } from '../context/BattleContext';
import { useEffect, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';

import DefeatModal from '../components/Battle/DefeatModal/DefeatModal';
import { initBattle } from './battleUtils';

function BattleScreen() {
    const [isGameOver, setIsGameOver] = useState(false);
    const navigate = useNavigate();
    const { champion: championClass, xp } = usePlayer();
    const { resetBattle, setPlayer, setEnemies, player, setTurns, setCurrentTurn} = useBattle();

    useEffect(() => {
        resetBattle();
        initBattle(xp, championClass, setPlayer, setEnemies, setTurns, setCurrentTurn)
    }, [])

    useEffect(() => {

        if (player?.health < 1) {
            resetBattle();
            setIsGameOver(true);
        }
    }, [player?.health])

    useEffect(() => {

    }, [player?.stats?.skills])

    return (
        <>
            <Battle />
            
            {isGameOver && (
                <DefeatModal
                    kills={11}
                    gold={22}
                    onExit={() => navigate("/")}
                />
            )}
        </>
    )
}

export default BattleScreen;