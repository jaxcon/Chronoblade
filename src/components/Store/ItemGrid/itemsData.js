export const items = [
    {
        id: "bloodAmulet",
        stats: [{ emoji: '❤️', value: 10 }],
        price: 50,
        stock: Infinity,
        image: 'assets/items/necklace.png'
    },
    {
        id: "hawkHelm",
        stats: [{ emoji: '🔰', value: 1 }],
        price: 80,
        stock: 10,
        image: 'assets/items/helmet12.png'
    },
    {
        id: "runeRing",
        stats: [{ emoji: '⚔️', value: 1 }],
        price: 60,
        stock: Infinity,
        image: 'assets/items/ring20.png'
    },
    {
        id: "windRing",
        stats: [{ emoji: '💚', value: 5 }],
        price: 40,
        stock: 10,
        image: 'assets/items/ring33.png'
    },
    {
        id: "darkAmulet",
        stats: [{ emoji: '🩸', value: 5 }],
        price: 50,
        stock: 3,
        image: 'assets/items/ring24.png'
    },
    {
        id: "fateShield",
        stats: [
            { emoji: '❤️', value: 5 },
            { emoji: '🔰', value: 5 },
            { emoji: '⚔️', value: 5 },
            { emoji: '💚', value: 5 }
        ],
        price: 80,
        stock: 2,
        image: 'assets/items/shield26.png'
    },
];

export function getPurchasedCount(buyedItems, id) {
    const item = buyedItems.find(item => item.id === id);
    return item?.count || 0;
}

export function getItemCount(id) {
    const item = items.find(item => item.id === id);
    return item.stock;
}

function getStatsById(id) {
    const item = items.find(item => item.id === id);
    return item.stats;
}

export function calculateStats(buyedItems) {
    const statsMap = {
        '❤️': 0,
        '💚': 0,
        '🔰': 0,
        '⚔️': 0,
        '🩸': 0,
    };

    buyedItems?.forEach(item => {
        const stats = getStatsById(item.id);
        stats.forEach(stat => {
            if (statsMap.hasOwnProperty(stat.emoji)) {
                statsMap[stat.emoji] += stat.value * item.count;
            }
        });
    })

    return Object.entries(statsMap).map(([emoji, value]) => ({ emoji, value }));
}