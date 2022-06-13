export const scrollTo = (
  element: HTMLElement,
  to: { left?: number; top?: number },
  callback?: () => void
) => {
  element.scrollTo({
    behavior: 'smooth',
    left: to.left,
    top: to.top,
  })
  const scroll = () => {
    if (element.scrollTop === to.top || element.scrollLeft === to.left) {
      if (callback) callback()
      element.removeEventListener('scroll', scroll)
    }
  }
  element.addEventListener('scroll', scroll)
  if (
    (element.scrollTop === to.top || element.scrollLeft === to.left) &&
    callback
  )
    callback()
}
