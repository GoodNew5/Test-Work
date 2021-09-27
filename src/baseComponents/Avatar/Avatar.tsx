import cn from 'classnames'
import { IRadioButtonProps } from './types'
import styles from './Avatar.module.scss'

const Avatar = (props: IRadioButtonProps) => {
  const {
    src,
    kind = 'one',
    size = 'one',
    className,
    withOverlayOnHover,
    ...rest
  } = props

  const s = cn(
    styles.avatar,
    styles[`kind--${kind}`],
    styles[`size--${size}`],
    { [styles.withOverlayOnHover]: withOverlayOnHover },
    className
  )

  return (
    <div className={s} {...rest}>
      {src?.length ? (
        <img className={styles.img} src={src} alt="avatar" />
      ) : (
        <div className={styles.defaultAvatar} />
      )}
    </div>
  )
}

export { Avatar }
