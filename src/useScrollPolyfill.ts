import { useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'

export const useScrollPolyfill = () => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])
}
