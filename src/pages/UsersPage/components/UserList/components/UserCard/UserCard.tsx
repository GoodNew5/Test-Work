import { Avatar } from 'baseComponents/Avatar'
import { observer } from 'mobx-react-lite'
import { IUserModel } from 'models/UserModel'
import styles from './UserCard.module.scss'

type TProps = {
  user: IUserModel
}

const UserCard = observer((props: TProps) => {
  const { user } = props
  const { name, picture, dob, translatedGender, registered, location } = user
  const { formatedDate } = registered
  const { fullAddress } = location
  const { age } = dob
  const { large } = picture

  return (
    <div className={styles.UserCard}>
      <Avatar className={styles.avatar} src={large} />
      <div className={styles.description}>
        <span className={styles.fullName}>{name.fullName}</span>
        <div className={styles.descrGroup}>
          <div className={styles.item}>
            <span className={styles.label}>Возраст:</span>
            <span className={styles.value}>{age}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Пол:</span>
            <span className={styles.value}>{translatedGender}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Адрес:</span>
            <span className={styles.value}>{fullAddress}</span>
          </div>
          <div className={styles.item}>
            <span className={styles.label}>Дата регистрации:</span>
            <span className={styles.value}>{formatedDate}</span>
          </div>
        </div>
      </div>
    </div>
  )
})

export { UserCard }
