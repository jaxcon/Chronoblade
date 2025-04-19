const soundMap = {
    attack: "/sounds/attack.mp3",
    hit: "assets//sounds/hit.mp3",
    heal: "/sounds/heal.mp3",
};

export function playSoundByName(name, volume = 0.5) {
    const src = soundMap[name];
    if (!src) return;
    const audio = new Audio(src);
    audio.volume = volume;
    audio.play();
}
