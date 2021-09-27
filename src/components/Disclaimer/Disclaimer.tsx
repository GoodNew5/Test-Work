import React from 'react'
import cn from 'classnames'
import styles from './Disclaimer.module.scss'

type IProps = {
  children: React.ReactNode
  stretchByWindow?: boolean
  stretchByParent?: boolean
  className?: string
}

const Disclaimer = (props: IProps) => {
  const {
    children,
    className = '',
    stretchByWindow,
    stretchByParent = !stretchByWindow,
  } = props

  const stylesDisclaimer = cn(
    styles.disclaimer,
    {
      [styles.stretchByParent]: stretchByParent,
      [styles.stretchByWindow]: stretchByWindow,
    },
    className
  )

  return <div className={stylesDisclaimer}>{children}</div>
}

export { Disclaimer }
