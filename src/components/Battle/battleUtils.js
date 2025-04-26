import { getLvl, getStatsFromLvl, getImagesForChamp } from '../Battle/championDataHandle';
import { creepsList } from '../Battle/unitList';

export const initPlayer = (xp, championClass, setPlayer) => {
    const champLvl = getLvl(xp);
    const { minAttack, maxAttack, defense, speed, criticalChance, shield, health: statHealth, skills } = getStatsFromLvl(champLvl, championClass);
    const { imageSource, avatarSource } = getImagesForChamp(championClass);

    const player = {
        id: championClass,
        champClass: championClass,
        stats: {
            minAttack: minAttack,
            maxAttack: maxAttack,
            defense: defense,
            speed: 0,
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

export const getTotalValue = (xp) => {
    return 500;
}

export const generateEnemies = (totalValue) => {

    const random = Math.random();
    const enemyCount = (random < 0.7) ? 3 : (random < 0.91) ? 2 : 1;


    const availableEnemies = creepsList.map(enemy => ({
        ...enemy,
        id: crypto.randomUUID(),
        currentHealth: enemy.stats.maxHealth
    }));

    availableEnemies.sort((a, b) => a.value - b.value);

    const selectedEnemies = [];
    let remainingValue = totalValue;

    for (let i = 0; i < enemyCount; i++) {

        if (i === enemyCount - 1) {
            const suitableEnemies = availableEnemies.filter(
                enemy => enemy.value <= remainingValue
            );

            if (suitableEnemies.length > 0) {
                const selected = suitableEnemies[suitableEnemies.length - 1];
                selectedEnemies.push(selected);
                remainingValue -= selected.value;
            } else {
                selectedEnemies.push(availableEnemies[0]);
                remainingValue -= availableEnemies[0].value;
            }
        } else {
            const maxValuePerEnemy = remainingValue / (enemyCount - i);
            const suitableEnemies = availableEnemies.filter(
                enemy => enemy.value <= maxValuePerEnemy
            );

            if (suitableEnemies.length > 0) {
                const randomIndex = Math.floor(Math.random() * suitableEnemies.length);
                const selected = suitableEnemies[randomIndex];
                selectedEnemies.push(selected);
                remainingValue -= selected.value;
            } else {
                selectedEnemies.push(availableEnemies[0]);
                remainingValue -= availableEnemies[0].value;
            }
        }
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
    return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
}