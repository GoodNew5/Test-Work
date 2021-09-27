import cn from 'classnames'
import { useClickOnEnter } from 'hooks/useClickOnEnter'
import React, { useRef, forwardRef } from 'react'
import styles from './Field.module.scss'
import { IFieldProps } from './types'

const Field = forwardRef((props: IFieldProps, ref: any) => {
  const {
    kind = 'one',
    size = '',
    children,
    onBlur,
    startComponent,
    endComponent,
    className,
    classNameMessage,
    placeholder = '',
    name = '',
    classNameLabel,
    component,
    disabled = false,
    onEnter,
    type = 'text',
    value,
    isTouched,
    label,
    message,
    isValid,
    classNameEndComponent,
    autoFocus = false,
    onChange,
    defaultValue,
    ...rest
  } = props

  // const customRef = ref
  const fieldRef = useRef(null)

  useClickOnEnter(() => {
    if (fieldRef.current === document.activeElement && onEnter) {
      onEnter()
    }
  })

  const renderInput = () => {
    if (component) {
      return React.cloneElement(component, {
        ...rest,
        ref,
        placeholder,
        disabled,
        className: styles.input,
        type,
        autoFocus,
        onBlur,
        value,
        // defaultValue,
      })
    }

    return (
      <input
        {...rest}
        // eslint-disable-next-line jsx-a11y/no-autofocus
        autoFocus={autoFocus}
        onBlur={(e) => {
          if (onBlur) {
            onBlur(e)
          }
        }}
        onChange={(e) => {
          if (onChange) {
            onChange(e)
          }
        }}
        defaultValue={defaultValue}
        name={name}
        disabled={disabled}
        placeholder={placeholder}
        ref={ref || fieldRef}
        type={type}
        className={styles.input}
        value={value}
      />
    )
  }

  const elementStyles = cn(
    styles.field,
    styles[`kind--${kind}`],
    styles[`size--${size}`],
    {
      [styles.disabled]: disabled,
      [styles.error]: isTouched && !isValid,
      [styles.positive]: isTouched && isValid && value?.toString().length,
    }
  )

  return (
    <>
      <label className={cn(styles.Field, className)}>
        {label && <span className={cn(styles.label, classNameLabel)}>{label}</span>}
        <div className={elementStyles}>
          <span className={styles.placeholderTextA11y}>{placeholder}</span>
          <div className={cn(styles.fieldInner)}>
            {startComponent && (
              <div className={styles.startComponent}>{startComponent}</div>
            )}
            {renderInput()}
            <div className={styles.hightlightBlock} />
            {endComponent && (
              <div className={cn(styles.endComponent, classNameEndComponent)}>
                {endComponent}
              </div>
            )}
          </div>
        </div>
        <div className={cn(styles.message, classNameMessage)}>{isTouched && message}</div>
      </label>
    </>
  )
})

export { Field }
