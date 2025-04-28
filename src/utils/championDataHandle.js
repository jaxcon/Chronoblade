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

const xpThreshold = [0, 50, 120, 210, 330, 480, 660, 870, 1110, 1380, 1680, 2010, 2370, 2760, 3180];

const getDraygarStats = (level) => {
    const health = 1100 + level * 6.7;
    return {
        minAttack: 25 + level * 2,
        maxAttack: 40 + level * 2,
        defense: 8 + level * 2.5,
        speed: Math.ceil(4 + level * 0.3),
        shield: Math.floor(health * 0.3),
        criticalChance: 1,
        health: Math.floor(health),
        Lifesteal: 5,
        skills: [...(level >= 5 ? ['shieldWall' ] : []), ...(level >= 10 ? ['rageStrike'] : []), ...(level >= 15 ? ['berserk'] : [])]
    };
};

const getDanitsaStats = (level) => {
    const health = 70 + level * 4;
    return {
        minAttack: 4 + level * 3,
        maxAttack: 14 + level * 3,
        defense: 4 + level * 1,
        speed: 6 + level * 1.3,
        Lifesteal: 0,
        shield: 0,
        criticalChance: 1,
        health: Math.floor(health),
        skills: [...(level >= 5 ? ['shadowStrike'] : []), ...(level >= 10 ? ['blink'] : []), ...(level >= 15 ? ['voidDance'] : [])]
    };
};

const getJormungadStats = (level) => {
    const health = 80 + level * 4.7;
    return {
        minAttack: 1 + level * 3.8,
        maxAttack: 10 + level * 3.8,
        defense: 5 + level * 0.6,
        speed: 7 + level * 0.7,
        Lifesteal: 10,
        shield: Math.floor(health * 0.3),
        criticalChance: 1 + level * 1.1,
        health: Math.floor(health),
        skills: [...(level >= 5 ? ['piercingHowl'] : []), ...(level >= 10 ? ['venomBlade'] : []), ...(level >= 15 ? ['earthShatter'] : [])]
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
