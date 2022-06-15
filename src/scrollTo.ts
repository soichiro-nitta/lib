export const scrollTo = (
  element: HTMLElement,
  to: { left?: number; top?: number },
  callback?: () => void
) => {
  const scroll = () => {
    if (element.scrollTop === to.top || element.scrollLeft === to.left) {
      element.removeEventListener('scroll', scroll)
      if (callback) {
        requestAnimationFrame(() => {
          callback()
        })
      }
    }
  }
  element.addEventListener('scroll', scroll)
  element.scrollTo({
    behavior: 'smooth',
    left: to.left,
    top: to.top,
  })
  scroll()
}
