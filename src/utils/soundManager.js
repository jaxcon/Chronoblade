const soundMap = {
    shield: "assets/sounds/shield.mp3",
    kill: "assets/sounds/hit.mp3",
    heal: "assets/sounds/heal.mp3",
    win: "assets/sounds/win.mp3",
    lose: "assets/sounds/lose.mp3",
    disappearance: "/assets/sounds/disappearance.mp3",
    critical: "assets/sounds/critical.mp3",
    berserk: "assets/sounds/berserk.mp3"
};

export function playSoundByName(name, volume = 0.3) {
    const src = soundMap[name];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}