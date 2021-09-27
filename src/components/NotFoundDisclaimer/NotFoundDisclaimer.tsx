import React from 'react'
import { observer } from 'mobx-react-lite'
import { Disclaimer } from 'components/Disclaimer'
import { Icon } from 'baseComponents/Icon'
import styles from './NotFoundDisclaimer.module.scss'

type TProps = {
  children?: React.ReactNode
}

const NotFoundDisclaimer = observer((props: TProps) => {
  const { children } = props

  return (
    <Disclaimer className={styles.disclaimer}>
      <Icon className={styles.icon} name="not-found" />
      <span className={styles.title}>Ничего не найдено!</span>
      {children}
    </Disclaimer>
  )
})

export { NotFoundDisclaimer }
