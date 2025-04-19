const presets = {
    draygar: {
      1: { attack: 10, defense: 8, speed: 4, shield: 5, criticalChance: 1, health: 50, skills: ['attack'] },
      2: { attack: 12, defense: 10, speed: 5, shield: 6, criticalChance: 1, health: 60, skills: ['attack'] },
      3: { attack: 15, defense: 12, speed: 5, shield: 8, criticalChance: 1, health: 70, skills: ['attack'] },
      4: { attack: 18, defense: 14, speed: 6, shield: 10, criticalChance: 1, health: 85, skills: ['attack'] },
      5: { attack: 22, defense: 16, speed: 6, shield: 12, criticalChance: 1, health: 100, skills: ['attack', 'flameSlash'] },
      6: { attack: 25, defense: 18, speed: 7, shield: 14, criticalChance: 1, health: 110, skills: ['attack', 'flameSlash'] },
      7: { attack: 28, defense: 20, speed: 8, shield: 16, criticalChance: 1, health: 120, skills: ['attack', 'flameSlash'] },
      8: { attack: 31, defense: 22, speed: 9, shield: 18, criticalChance: 1, health: 130, skills: ['attack', 'flameSlash'] },
      9: { attack: 34, defense: 24, speed: 10, shield: 20, criticalChance: 1, health: 140, skills: ['attack', 'flameSlash'] },
      10: { attack: 37, defense: 26, speed: 11, shield: 22, criticalChance: 1, health: 150, skills: ['attack', 'flameSlash', 'dragonRoar'] },
      11: { attack: 40, defense: 28, speed: 11, shield: 24, criticalChance: 1, health: 160, skills: ['attack', 'flameSlash', 'dragonRoar'] },
      12: { attack: 43, defense: 30, speed: 12, shield: 26, criticalChance: 1, health: 170, skills: ['attack', 'flameSlash', 'dragonRoar'] },
      13: { attack: 46, defense: 32, speed: 12, shield: 28, criticalChance: 1, health: 180, skills: ['attack', 'flameSlash', 'dragonRoar'] },
      14: { attack: 49, defense: 34, speed: 13, shield: 30, criticalChance: 1, health: 190, skills: ['attack', 'flameSlash', 'dragonRoar'] },
      15: { attack: 52, defense: 36, speed: 13, shield: 32, criticalChance: 1, health: 200, skills: ['attack', 'flameSlash', 'dragonRoar', 'berserk'] },
    },
    danitsa: {
      1: { attack: 14, defense: 4, speed: 6, shield: 3, criticalChance: 1, health: 35, skills: ['attack'] },
      2: { attack: 17, defense: 5, speed: 7, shield: 4, criticalChance: 1, health: 42, skills: ['attack'] },
      3: { attack: 20, defense: 6, speed: 8, shield: 5, criticalChance: 1, health: 50, skills: ['attack'] },
      4: { attack: 24, defense: 7, speed: 9, shield: 6, criticalChance: 1, health: 58, skills: ['attack'] },
      5: { attack: 28, defense: 8, speed: 10, shield: 7, criticalChance: 1, health: 66, skills: ['attack', 'shadowStrike'] },
      6: { attack: 31, defense: 9, speed: 11, shield: 8, criticalChance: 1, health: 72, skills: ['attack', 'shadowStrike'] },
      7: { attack: 34, defense: 10, speed: 12, shield: 9, criticalChance: 1, health: 78, skills: ['attack', 'shadowStrike'] },
      8: { attack: 37, defense: 11, speed: 13, shield: 10, criticalChance: 1, health: 84, skills: ['attack', 'shadowStrike'] },
      9: { attack: 40, defense: 12, speed: 14, shield: 11, criticalChance: 1, health: 90, skills: ['attack', 'shadowStrike'] },
      10: { attack: 44, defense: 13, speed: 15, shield: 12, criticalChance: 1, health: 96, skills: ['attack', 'shadowStrike', 'moonBlessing'] },
      11: { attack: 47, defense: 14, speed: 15, shield: 13, criticalChance: 1, health: 102, skills: ['attack', 'shadowStrike', 'moonBlessing'] },
      12: { attack: 50, defense: 15, speed: 16, shield: 14, criticalChance: 1, health: 108, skills: ['attack', 'shadowStrike', 'moonBlessing'] },
      13: { attack: 53, defense: 16, speed: 17, shield: 15, criticalChance: 1, health: 114, skills: ['attack', 'shadowStrike', 'moonBlessing'] },
      14: { attack: 56, defense: 17, speed: 18, shield: 16, criticalChance: 1, health: 120, skills: ['attack', 'shadowStrike', 'moonBlessing'] },
      15: { attack: 60, defense: 18, speed: 19, shield: 17, criticalChance: 1, health: 126, skills: ['attack', 'shadowStrike', 'moonBlessing', 'voidDance'] },
    },
    jormungad: {
      1: { attack: 8, defense: 6, speed: 7, shield: 6, criticalChance: 1, health: 40, skills: ['attack'] },
      2: { attack: 10, defense: 7, speed: 8, shield: 8, criticalChance: 1, health: 50, skills: ['attack'] },
      3: { attack: 12, defense: 8, speed: 9, shield: 10, criticalChance: 1, health: 60, skills: ['attack'] },
      4: { attack: 15, defense: 9, speed: 10, shield: 12, criticalChance: 1, health: 70, skills: ['attack'] },
      5: { attack: 18, defense: 10, speed: 11, shield: 14, criticalChance: 1, health: 80, skills: ['attack', 'venomBite'] },
      6: { attack: 20, defense: 11, speed: 12, shield: 16, criticalChance: 1, health: 88, skills: ['attack', 'venomBite'] },
      7: { attack: 22, defense: 12, speed: 13, shield: 18, criticalChance: 1, health: 96, skills: ['attack', 'venomBite'] },
      8: { attack: 24, defense: 13, speed: 14, shield: 20, criticalChance: 1, health: 104, skills: ['attack', 'venomBite'] },
      9: { attack: 26, defense: 14, speed: 15, shield: 22, criticalChance: 1, health: 112, skills: ['attack', 'venomBite'] },
      10: { attack: 29, defense: 15, speed: 16, shield: 24, criticalChance: 1, health: 120, skills: ['attack', 'venomBite', 'tailWhip'] },
      11: { attack: 31, defense: 16, speed: 16, shield: 26, criticalChance: 1, health: 128, skills: ['attack', 'venomBite', 'tailWhip'] },
      12: { attack: 33, defense: 17, speed: 17, shield: 28, criticalChance: 1, health: 136, skills: ['attack', 'venomBite', 'tailWhip'] },
      13: { attack: 35, defense: 18, speed: 17, shield: 30, criticalChance: 1, health: 144, skills: ['attack', 'venomBite', 'tailWhip'] },
      14: { attack: 37, defense: 19, speed: 18, shield: 32, criticalChance: 1, health: 152, skills: ['attack', 'venomBite', 'tailWhip'] },
      15: { attack: 40, defense: 20, speed: 19, shield: 34, criticalChance: 1, health: 160, skills: ['attack', 'venomBite', 'tailWhip', 'earthShatter'] },
    }
  };

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
    const health = 100 + level * 6.7;
    return {
      attack: 10 + level * 2,
      defense: 8 + level * 2.5,
      speed: Math.ceil(4 + level * 0.3),
      shield: Math.floor(health * 0.4),
      criticalChance: 1,
      health: Math.floor(health),
      skills: ['attack', ...(level >= 5 ? ['shieldWall'] : []), ...(level >= 10 ? ['rageStrike'] : []), ...(level >= 15 ? ['berserk'] : [])]
    };
  };

  const getDanitsaStats = (level) => {
    const health = 70 + level * 4;
    return {
      attack: 14 + level * 3,
      defense: 4 + level * 1,
      speed: 6 + level * 1.3,
      shield: 0,
      criticalChance: 1,
      health: Math.floor(health),
      skills: ['attack', ...(level >= 5 ? ['shadowStrike'] : []), ...(level >= 10 ? ['blink'] : []), ...(level >= 15 ? ['voidDance'] : [])]
    };
  };

  const getJormungadStats = (level) => {
    const health = 80 + level * 4.7;
    return {
      attack: 10 + level * 3.8,
      defense: 5 + level * 0.6,
      speed: 7 + level * 0.7,
      shield: Math.floor(health * 0.3),
      criticalChance: 1 + level * 1.1,
      health: Math.floor(health),
      skills: ['attack', ...(level >= 5 ? ['piercingHowl'] : []), ...(level >= 10 ? ['venomBlade'] : []), ...(level >= 15 ? ['earthShatter'] : [])]
    };
  };

export function getStatsFromLvl(lvl, champClass) {
    return champClass === 'draygar' ?getDraygarStats(lvl) :champClass === 'danitsa' ?getDanitsaStats(lvl) :getJormungadStats(lvl);
}


export function calculateLvl(exp) {
    for (let i = xpThreshold.length - 1; i >= 0; i--) {
        if (exp >= xpThreshold[i]) {
          return i + 1;
        }
      }
}

export function getImagesForChamp(champClass) {
    return imageSources[champClass];
}
