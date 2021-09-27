import styles from './Spinner.module.scss'
import cn from 'classnames'

type TProps = {
  withOverlay?: boolean
  className?: string
  classNameRing?: string
}

const Spinner = (props: TProps) => {
  const { withOverlay, className } = props

  return (
    <div className={cn({ [styles.withOverlay]: withOverlay }, className)}>
      <div className={cn(styles.Spinner, className)} />
    </div>
  )
}

export { Spinner }
