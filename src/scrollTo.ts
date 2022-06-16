export const scrollTo = (
  element: HTMLElement,
  to: { left?: number; top?: number }
): Promise<void> => {
  return new Promise((resolve): void => {
    const scroll = () => {
      if (element.scrollTop === to.top || element.scrollLeft === to.left) {
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
