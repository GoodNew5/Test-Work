import React from 'react'
import { observer } from 'mobx-react-lite'
import { Disclaimer } from 'components/Disclaimer'
import styles from './AppErrorDisclaimer.module.scss'

const AppErrorDisclaimer = observer(() => {
  return (
    <Disclaimer stretchByWindow className={styles.AppErrorDisclaimer}>
      Something went wrong. 😟
    </Disclaimer>
  )
})

export { AppErrorDisclaimer }
