"use strict";
window.onload = () => {
    const page = document.querySelector('.page');
    const tofu = document.querySelector('.tofu');
    const frameCount = 60;
    const clamp = (value, min, max) => {
        return Math.max(min, Math.min(max, value));
    };
    const setImageX = (pointerX) => {
        const rect = tofu.getBoundingClientRect();
        const offsetX = clamp(pointerX - rect.x, 0, rect.width - 1);
        const frame = Math.floor(offsetX * frameCount / rect.width);
        const imageX = -rect.width * frame;
        tofu.style.backgroundPositionX = imageX.toString() + 'px';
    };
    page.addEventListener('touchmove', (e) => {
        const te = e;
        const touch = te.targetTouches[te.targetTouches.length - 1];
        setImageX(touch.pageX);
    });
    page.addEventListener('mousemove', (e) => {
        const me = e;
        setImageX(me.pageX);
    });
};
