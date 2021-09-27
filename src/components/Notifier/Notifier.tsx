import React from 'react'
import { observer } from 'mobx-react-lite'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styles from './Notifier.module.scss'

const Notifier = observer(() => {
  return (
    <ToastContainer
      limit={3}
      className={styles.Notifier}
    />
  )
})

export { Notifier }
