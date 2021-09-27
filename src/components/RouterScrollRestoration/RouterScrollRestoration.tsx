import { useEffect } from 'react'

type TProps = {
  pathname: string
}

const RouterScrollRestoration = (props: TProps) => {
  const { pathname } = props

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export { RouterScrollRestoration }
