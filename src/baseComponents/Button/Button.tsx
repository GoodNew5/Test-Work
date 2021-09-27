import cn from 'classnames'
import React from 'react'
import styles from './Button.module.scss'
import { IButtonProps } from './types'

const Button = (props: IButtonProps) => {
  const {
    children,
    component,
    className,
    disabled = false,
    isActive,
    kind,
    size,
    shape,
    stretchUp,
    wide,
    ...rest
  } = props

  const elementClassNames = cn(
    styles.btn,
    styles[`kind--${kind}`],
    styles[`size--${size}`],
    styles[`shape--${shape}`],
    stretchUp && styles.stretchUp,
    wide && styles.wide,
    isActive && styles.isActive,
    disabled && styles.disabled,
    className
  )

  const renderComponent = () => {
    if (!component) {
      return (
        <button {...rest} disabled={disabled} type="button" className={elementClassNames}>
          {children}
        </button>
      )
    }
    return React.cloneElement(component, {
      className: elementClassNames,
      ...rest,
    })
  }

  return renderComponent()
}

export { Button }
