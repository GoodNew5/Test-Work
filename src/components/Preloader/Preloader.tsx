import React from 'react'
import cn from 'classnames'
import styles from './Preloader.module.scss'

type Props = {
  className?: string
  classNameOverlay?: string
  classNameLoader?: string
  absolutePositioning?: boolean
  withOverlay?: boolean
}

const Preloader = (props: Props) => {
  const { className, absolutePositioning, classNameLoader, withOverlay } = props

  return (
    <div
      className={cn(
        styles.outer,
        { [styles.absolutePositioning]: absolutePositioning },
        { [styles.withOverlay]: withOverlay },
        className
      )}
    >
      <div className={cn(styles.preloader, classNameLoader)}></div>
    </div>
  )
}

export { Preloader }
