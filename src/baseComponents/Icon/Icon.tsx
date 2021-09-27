import React from 'react'
import cn from 'classnames'
import styles from './Icon.module.scss'
import { IIconProps } from './types'

const Icon = (props: IIconProps) => {
  const { name, className, ...rest } = props

  return (
    <svg {...rest} className={cn(styles.Icon, className)}>
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

export { Icon }
