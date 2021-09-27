import { Link } from 'react-router-dom'
import { appConstants } from 'config/constants'
import { Button } from 'baseComponents/Button'
import styles from './NotFoundPage.module.scss'

const NotFoundPage = () => {
  return (
    <div className={styles.NotFound}>
      <span className={styles.title}>Данной страницы не существует.</span>
      <Button
        size="one"
        kind="one"
        component={<Link to={appConstants.ROUTES.HOME_PATH}>Вернуться на главную</Link>}
      />
    </div>
  )
}

export { NotFoundPage }
