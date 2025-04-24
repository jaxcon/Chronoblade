
import { calculateLvl, getStatsFromLvl, getImagesForChamp } from '../components/Battle/championDataHandle';

function initPlayer(xp, championClass, setPlayer) {
    const champLvl = calculateLvl(xp);
    const { attack, defense, speed, criticalChance, shield, health: statHealth, skills } = getStatsFromLvl(champLvl, championClass);
    const { imageSource, avatarSource } = getImagesForChamp(championClass);

    const player = {
        id: championClass,
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
        avatar: avatarSource,
        xp: xp,
        maxHealth: statHealth, //+itemHealth + passive
        currentHealth: statHealth

    }
    setPlayer(player);

    return player;
}


function initEnemies(setEnemies) {
    const enemies = [
        {
            name: 'Ibis',
            image: 'assets/units/enemies/Ibis.png',
            avatar: 'assets/units/enemies/avatars/ibis.png',
            isAlive: true,
            hp: 100,
            maxHp: 100,
            id: 'Ibis1',
            stats: {speed: 13}
        },
        {
            name: 'Ibis',
            image: 'assets/units/enemies/Ibis.png',
            avatar: 'assets/units/enemies/avatars/ibis.png',
            isAlive: true,
            hp: 100,
            maxHp: 100,
            id: 'Ibis2',
            stats: {speed: 3}
        },
        {
            name: 'Ibis',
            image: 'assets/units/enemies/ibis.png',
            avatar: 'assets/units/enemies/avatars/ibis.png',
            isAlive: true,
            hp: 100,
            maxHp: 100,
            id: 'Ibis3',
            stats: {speed: 3}
        }
    ];
    setEnemies(enemies);
    return enemies;
}

const updateTurnsOrder = (turns) => {
    if (!turns) return [];

    return turns.sort((a, b) => {
        return b.stats.speed - a.stats.speed;
    }).map(unit => {
        return {id: unit.id, avatar: unit.avatar}});
}

function initTurns(player, enemies, setTurns) {
    setTurns(
        {
            queue: updateTurnsOrder([player, ...enemies]),
            turnOrder: 0
        }
    );
}

export function initBattle(xp, championClass, setPlayer, setEnemies, setTurns) {
    const player = initPlayer(xp, championClass, setPlayer);
    const enemies = initEnemies(setEnemies);
    initTurns(player, enemies, setTurns);
}