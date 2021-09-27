import React from 'react'
import cn from 'classnames'
import styles from './ThemeRoot.module.scss'

type IProps = {
  children: React.ReactNode
  className?: string
}

const ThemeRoot = (props: IProps) => {
  const { children, className, ...rest } = props

  // alert()
  return (
    <div className={cn(styles.appContainer, className)} {...rest}>
      {children}
    </div>
  )
}

export { ThemeRoot }
