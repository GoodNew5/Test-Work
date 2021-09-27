import { useEffect } from 'react'
import { checkIsMobileOrTablet } from 'utils/checkIsMobileOrTablet'

export const useClickOnEnter = (callback?: () => void, ref: any = {}) => {
  useEffect(() => {
    if (checkIsMobileOrTablet() || !callback) return undefined

    const handleClickOnEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        if (ref?.current) {
          if (document.activeElement === ref.current) {
            callback()
          }
        } else {
          callback()
        }
      }
    }

    window.addEventListener('keydown', handleClickOnEnter)

    return () => {
      window.removeEventListener('keydown', handleClickOnEnter)
    }
  }, [callback, ref])
}
