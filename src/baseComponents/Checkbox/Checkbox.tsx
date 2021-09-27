import cn from 'classnames'
import { ICheckboxProps } from './types'
import styles from './Checkbox.module.scss'

const Checkbox = (props: ICheckboxProps) => {
  const {
    disabled,
    className,
    classNameBox,
    classNameLabel,
    kind = 'one',
    size = 'one',
    shape = 'square',
    children,
    placeholder,
    checked,
    yCenter,
    ...rest
  } = props

  return (
    <label
      className={cn(
        styles.checkbox,
        { [styles.yCenter]: yCenter },
        { [styles.checked]: checked },
        { [styles.disabled]: disabled },
        styles[`kind--${kind}`],
        styles[`size--${size}`],
        styles[`shape--${shape}`],
        className
      )}
    >
      <span className={styles.placeholderTextA11y}>{placeholder}</span>
      <input
        {...rest}
        className={styles.field}
        disabled={disabled}
        checked={checked}
        type="checkbox"
      />
      <div className={cn(styles.box, classNameBox)} />
      <div className={styles.hightlightBlock} />
      <span className={cn(styles.label, classNameLabel)}>{children}</span>
    </label>
  )
}

export { Checkbox }
