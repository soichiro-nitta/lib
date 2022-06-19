export const scrollTo = (
  element: HTMLElement,
  to: { left?: number; top?: number }
): Promise<void> => {
  return new Promise((resolve): void => {
    const scroll = () => {
      if (
        (to.top !== undefined &&
          Math.floor(element.scrollTop) === Math.floor(to.top)) ||
        (to.left !== undefined &&
          Math.floor(element.scrollLeft) === Math.floor(to.left))
      ) {
        element.removeEventListener('scroll', scroll)
        requestAnimationFrame(() => {
          resolve()
        })
      }
    }
    element.addEventListener('scroll', scroll)
    element.scrollTo({
      behavior: 'smooth',
      left: to.left,
      top: to.top,
    })
    scroll()
  })
}
