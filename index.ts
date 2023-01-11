window.onload = () => {
    const page = document.querySelector('.page') as HTMLElement
    const izuna = document.querySelector('.izuna') as HTMLElement
    const frameCount = 60

    const clamp = (value: number, min: number, max: number): number => {
        return Math.max(min, Math.min(max, value))
    }

    const setImageX = (pointerX: number) => {
        const rect = izuna.getBoundingClientRect()
        const offsetX = clamp(pointerX - rect.x, 0, rect.width - 1)
        const frame = Math.floor(offsetX * frameCount / rect.width)
        const imageX = -rect.width * frame
        izuna.style.backgroundPositionX = imageX.toString() + 'px'
    }

    page.addEventListener('touchmove', (e: Event) => {
        const te = e as TouchEvent
        const touch = te.targetTouches[te.targetTouches.length - 1]
        setImageX(touch.pageX)
    })

    page.addEventListener('mousemove', (e: Event) => {
        const me = e as MouseEvent
        setImageX(me.pageX)
    })
}
