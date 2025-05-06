const imageSources = {
    draygar: {
        imageSource: 'assets/units/allies/draygar.png',
        avatarSource: 'assets/units/allies/avatars/draygar.png'
    },
    danitsa: {
        imageSource: 'assets/units/allies/danitsa.png',
        avatarSource: 'assets/units/allies/avatars/danitsa.png'
    },
    jormungad: {
        imageSource: 'assets/units/allies/jormungad.png',
        avatarSource: 'assets/units/allies/avatars/jormungad.png'
    },

}

const xpThreshold = [0, 100, 240, 420, 660, 960, 1240, 1700, 2200, 2700, 3350, 3880, 4600, 5100, 5600, 6000, 6700, 7800, 8500, 9200, 10420, 12000];

const getDraygarStats = (level) => {
    const health = 130 + level * 6.7;
    return {
        minAttack: 25 + level * 2,
        maxAttack: 40 + level * 2,
        defense: Math.floor(8 + level * 2.5),
        speed: Math.ceil(4 + level * 0.3),
        shield: Math.floor(health * 0.2),
        criticalChance: 3 + Math.ceil(level / 2),
        health: Math.floor(health),
        lifeSteal: 5,
        skills: ['shieldWall', ...(level >= 10 ? ['rageStrike'] : []), ...(level >= 15 ? ['berserk'] : [])]
    };
};

const getDanitsaStats = (level) => {

    return {
        minAttack: 34 + level * 3,
        maxAttack: 42 + level * 3,
        defense: 4 + level,
        speed: Math.floor(6 + level * 0.4),
        lifeSteal: 10,
        shield: 0,
        criticalChance: 7 + level,
        health: Math.floor(110 + level * 4),
        skills: ['shadowStrike', ...(level >= 10 ? ['bloodHarvest'] : []), ...(level >= 15 ? ['voidDance'] : [])]
    };
};

const getJormungadStats = (level) => {
    const health = 140 + level * 5.8;
    return {
        minAttack: Math.floor(31 + level * 2.8),
        maxAttack: Math.floor(34 + level * 2.8),
        defense: Math.floor(5 + level * 1.8),
        speed: Math.floor(5 + level * 0.32),
        lifeSteal: 3,
        shield: Math.floor(health * 0.3),
        criticalChance: 1 + Math.ceil(level / 4),
        health: Math.floor(health),
        skills: ['piercingHowl', ...(level >= 10 ? ['venomBlade'] : []), ...(level >= 15 ? ['earthShatter'] : [])]
    };
};

export const getLvl = (exp) => {
    for (let i = xpThreshold.length - 1; i >= 0; i--) {
        if (exp >= xpThreshold[i]) {
            return i + 1;
        }
    }
}

export const getStatsFromLvl = (lvl, champClass) => {
    return champClass === 'draygar'
        ? getDraygarStats(lvl)
        : champClass === 'danitsa'
            ? getDanitsaStats(lvl)
            : getJormungadStats(lvl);
}

export const getSkills = (exp, champClass) => {
    return getStatsFromLvl(getLvl(exp), champClass).skills.filter(skill => skill !== 'attack');
}

export function getImagesForChamp(champClass) {
    return imageSources[champClass];
}
