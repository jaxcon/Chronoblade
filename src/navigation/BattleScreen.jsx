import { useNavigate } from 'react-router-dom';
import Battle from '../components/Battle/Battle';
import { useBattle } from '../context/BattleContext';
import { useEffect, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { calculateLvl, getStatsFromLvl, getImagesForChamp } from '../components/Battle/championDataHandle';
import DefeatModal from '../components/Battle/DefeatModal/DefeatModal';

function BattleScreen() {
    const [isGameOver, setIsGameOver] = useState(false);
    const navigate = useNavigate();
    const { champion: championClass, xp } = usePlayer();
    const { resetBattle, setPlayer, setEnemies, player } = useBattle();

    useEffect(() => {
        resetBattle();

        const champLvl = calculateLvl(xp);
        const { attack, defense, speed, criticalChance, shield, health: statHealth, skills } = getStatsFromLvl(champLvl, championClass);
        const { imageSource, avatarSource } = getImagesForChamp(championClass);

        setPlayer({
            champClass: championClass,
            stats: {
                attack: attack,
                defense: defense,
                speed: speed,
                criticalChance: criticalChance,
                shield: shield,
                health: statHealth,
                skills: skills
            },
            imageSource: imageSource,
            avatarSource: avatarSource,
            xp: xp,
            maxHealth: statHealth, //+itemHealth + passive
            currentHealth: statHealth
            
        })

        setEnemies(
                [
                    {
                        name: 'Ibis',
                        image: 'assets/units/enemies/Ibis.png',
                        isAlive: true,
                        hp: 100,
                        maxHp: 100,
                        id: 'Ibis1'
                    },
                    {
                        name: 'Ibis',
                        image: 'assets/units/enemies/Ibis.png',
                        isAlive: true,
                        hp: 100,
                        maxHp: 100,
                        id: 'Ibis2'
                    },
                    {
                        name: 'Ibis',
                        image: 'assets/units/enemies/Ibis.png',
                        isAlive: true,
                        hp: 100,
                        maxHp: 100,
                        id: 'Ibis3'
                    }
                ]
        )

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
            <Battle 
            player={{
                name: 'Hero',
                image: 'assets/units/allies/draygar.png',
                isAlive: true,
            }}

                turnLog={[
                    { name: 'Hero', image: 'assets/units/enemies/avatars/Ibis.png' },
                    { name: 'Goblin', image: 'assets/units/enemies/avatars/Ibis.png' },
                    { name: 'Hero', image: 'assets/units/enemies/avatars/Ibis.png' },
                    { name: 'Orc', image: 'assets/units/enemies/avatars/Ibis.png' },
                ]}
            >

            </Battle>
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