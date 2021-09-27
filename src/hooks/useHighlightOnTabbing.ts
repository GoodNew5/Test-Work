import { useEffect } from 'react'

const TAB_KEY_CODE = 9
const TABBING_GLOBAL_CLASSNAME = 'user-is-tabbing'

const useHighlightOnTabbing = () => {
  useEffect(() => {
    const css = 'body:not(.user-is-tabbing) * { outline: none !important; }'
    const head = document.head || document.getElementsByTagName('head')[0]
    const style = document.createElement('style')

    head.appendChild(style)

    style.appendChild(document.createTextNode(css))

    function handleFirstTab(event: KeyboardEvent) {
      if (event.keyCode === TAB_KEY_CODE) {
        document.body.classList.add(TABBING_GLOBAL_CLASSNAME)

        window.removeEventListener('keydown', handleFirstTab)
        // eslint-disable-next-line
        window.addEventListener('mousedown', handleMouseDownOnce)
      }
    }

    function handleMouseDownOnce() {
      document.body.classList.remove(TABBING_GLOBAL_CLASSNAME)

      window.removeEventListener('mousedown', handleMouseDownOnce)
      window.addEventListener('keydown', handleFirstTab)
    }

    window.addEventListener('keydown', handleFirstTab)

    return () => {
      window.removeEventListener('keydown', handleFirstTab)
      window.addEventListener('mousedown', handleMouseDownOnce)
    }
  }, [])
}

export { useHighlightOnTabbing }
