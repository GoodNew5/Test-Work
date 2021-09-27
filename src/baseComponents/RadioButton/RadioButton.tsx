import cn from 'classnames'
import styles from './RadioButton.module.scss'
import { IRadioButtonProps } from './types'

const RadioButton = (props: IRadioButtonProps) => {
  const {
    children,
    name,
    size,
    kind,
    checked,
    disabled,
    className,
    classNameLabel,
    value,
    ...rest
  } = props

  const elementStyles = cn(
    styles.radioButton,
    styles[`kind--${kind}`],
    { [styles.checked]: checked },
    styles[`size--${size}`],
    className
  )

  return (
    <label className={elementStyles}>
      <input
        {...rest}
        value={value}
        name={name}
        disabled={disabled}
        checked={checked}
        type="radio"
      />
      <div className={styles.box} />
      <span className={cn(styles.label, classNameLabel)}>{children}</span>
    </label>
  )
}

export { RadioButton }
