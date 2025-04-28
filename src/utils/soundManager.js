const soundMap = {
    attack: "assets/sounds/hit.mp3",
    gotHitting: "assets/sounds/hit.mp3",
    getShield: "assets/sounds/hit.mp3",
    kill: "assets//sounds/hit.mp3",
    heal: "/sounds/heal.mp3",
    disappearance: "/assets/sounds/disappearance.mp3",
};

export function playSoundByName(name, volume = 0.5) {
    const src = soundMap[name];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}