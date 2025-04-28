import { getLvl, getStatsFromLvl, getImagesForChamp } from './championDataHandle';
import { creepsList } from './unitList';

export const initPlayer = (xp, championClass, setPlayer) => {
    const champLvl = getLvl(xp);
    const { minAttack, maxAttack, defense, speed, criticalChance, shield, health: statHealth, skills, Lifesteal } = getStatsFromLvl(champLvl, championClass);
    const { imageSource, avatarSource } = getImagesForChamp(championClass);

    const player = {
        id: championClass,
        champClass: championClass,
        stats: {
            minAttack: minAttack,
            maxAttack: maxAttack,
            defense: defense,
            speed: speed,
            criticalChance: criticalChance,
            health: statHealth,
            Lifesteal: Lifesteal,
            skills: skills
        },
        shield: shield,
        imageSource: imageSource,
        avatar: avatarSource,
        xp: xp,
        maxHealth: statHealth, //+itemHealth + passive
        currentHealth: statHealth
    }
    setPlayer(player);

    return player;
}

export const getTotalValue = (xp) => {
    return 500;
}

export const generateEnemies = (totalValue) => {

    const random = Math.random();
    const enemyCount = (random < 0.7) ? 3 : (random < 0.91) ? 2 : 1;

    const availableEnemies = [...creepsList].sort((a, b) => a.value - b.value);

    const selectedEnemies = [];
    let remainingValue = totalValue;

    const processEnemy = (enemyPool) => {
        const selected = { ...enemyPool, id: crypto.randomUUID() };
        selectedEnemies.push(selected);
        remainingValue -= selected.value;
        return selected;
    };

    for (let i = 0; i < enemyCount; i++) {
        const isLastEnemy = i === enemyCount - 1;
        const maxValue = isLastEnemy
            ? remainingValue
            : remainingValue / (enemyCount - i);

        const suitableEnemies = availableEnemies.filter(enemy => enemy.value <= maxValue);
        const enemyPool = suitableEnemies.length > 0
            ? suitableEnemies[
                isLastEnemy
                    ? suitableEnemies.length - 1
                    : Math.floor(Math.random() * suitableEnemies.length)
            ]
            : availableEnemies[0];

        processEnemy(enemyPool);
    }

    return selectedEnemies;
};


export const initEnemies = (setEnemies, totalValue) => {
    const enemies = generateEnemies(totalValue);
    setEnemies(enemies);
    return enemies;
}

export const updateTurnsOrder = (turns) => {
    if (!turns) return [];

    return turns.sort((a, b) => {
        return b.stats.speed - a.stats.speed;
    }).map(unit => {
        return { id: unit.id, avatar: unit.avatar }
    });
}

export const initTurns = (player, enemies, setTurns) => {
    const sortedTurns = updateTurnsOrder([player, ...enemies])
    const turns = {
        queue: sortedTurns,
        turnOrder: 0
    };
    setTurns(turns);
    return turns;
}

export const getAttackDamage = (minDamage, maxDamage) => {
    return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + Math.floor(minDamage);
}