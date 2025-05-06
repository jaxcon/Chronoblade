import { getLvl, getStatsFromLvl, getImagesForChamp } from './championDataHandle';
import { calculateItemsStats } from './itemsData';
import { creepsList } from './unitList';

export const getStatsOverAll = (champLvl, championClass, items) => {
    const { minAttack, maxAttack, defense, speed, criticalChance, shield, health: statHealth, skills, lifeSteal } = getStatsFromLvl(champLvl, championClass);
    const itemsStats = calculateItemsStats(items);

    return {
        stats: {
            minAttack: minAttack + itemsStats.attack,
            maxAttack: maxAttack + itemsStats.attack,
            defense: defense + itemsStats.defense,
            speed: speed,
            criticalChance: criticalChance,
            health: statHealth + itemsStats.health,
            lifeSteal: lifeSteal + itemsStats.lifeSteal,
            skills: skills,
            hpRegen: itemsStats.hpRegen
        }, 
        maxHealth: itemsStats.health + statHealth,
        shield: shield
    }
}

export const initPlayer = (xp, championClass, setPlayer, items) => {
    const champLvl = getLvl(xp);
    const { stats, maxHealth, shield } = getStatsOverAll(champLvl, championClass, items)
    const { imageSource, avatarSource } = getImagesForChamp(championClass);

    const player = {
        id: championClass,
        champClass: championClass,
        stats: stats,
        shield: shield,
        imageSource: imageSource,
        avatar: avatarSource,
        xp: xp,
        maxHealth: maxHealth,
        currentHealth: maxHealth
    }
    setPlayer(player);

    return player;
}

export const getTotalValue = (battleNumber) => {
    return 150 + battleNumber * 75;
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
        turnOrder: 0,
        cooldowns: []
    };
    setTurns(turns);
    return turns;
}

export const getAttackDamage = (minDamage, maxDamage, criticalChance, defense) => {
    const baseDamage = Math.floor(((Math.random() * (maxDamage - minDamage + 1)) + minDamage) * (1 - defense / (defense + 30)));
    const isCritical = Math.random() * 100 < criticalChance;
    return {
        attackDamage: isCritical ? baseDamage * 2 : baseDamage,
        isCritical: isCritical
    };
}

export const generateBattleItems = (setUsableItems) => {
    const itemsPool = [
        { id: 'bandage', emoji: '🩹' },
        { id: 'adrenaline', emoji: '⚡' },
        { id: 'titanPotion', emoji: '🧪' },
        { id: 'shieldGenerator', emoji: '🛡️' }
    ];

    const generatedItems = [];
    for (let i = 0; i < 3; i++) {
        const randomIndex = Math.floor(Math.random() * itemsPool.length);
        generatedItems.push(itemsPool[randomIndex]);
    }
    setUsableItems(generatedItems);
    return generatedItems;
};
