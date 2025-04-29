const soundMap = {
    getShield: "assets/sounds/hit.mp3",
    shield: "assets/sounds/shield.wav",
    kill: "assets/sounds/hit.mp3",
    heal: "/sounds/heal.mp3",
    win: "assets/sounds/win.wav",
    lose: "assets/sounds/lose.wav",
    disappearance: "/assets/sounds/disappearance.mp3",
};

export function playSoundByName(name, volume = 0.5) {
    const src = soundMap[name];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}