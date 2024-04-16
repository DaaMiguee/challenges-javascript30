const playNow = (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return
    key.classList.add('playing');
    audio.play();
    audio.currentTime = 0;
}
const removeClass = (e) => e.target.classList.remove('playing');

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeClass));
window.addEventListener('keydown', playNow);