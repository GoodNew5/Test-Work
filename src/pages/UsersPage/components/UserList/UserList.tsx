import { NotFoundDisclaimer } from 'components/NotFoundDisclaimer'
import { Preloader } from 'components/Preloader'
import { observer } from 'mobx-react-lite'
import { IUsersModel } from 'stores/UsersStore/models/UsersModel'
import { UserCard } from './components/UserCard'
import styles from './UserList.module.scss'

type TProps = {
  users: IUsersModel
}

const UserList = observer((props: TProps) => {
  const { users } = props
  const { filteredUserList, list, isFetched, isLoading } = users

  return (
    <>
      {isLoading && !isFetched ? (
        <Preloader />
      ) : (
        <>
          {!list?.length ? (
            <NotFoundDisclaimer />
          ) : (
            <>
              {!filteredUserList.length ? (
                <NotFoundDisclaimer>Попробуйте изменить фильтр</NotFoundDisclaimer>
              ) : (
                <div className={styles.UserList}>
                  {filteredUserList.map((user) => (
                    <UserCard key={user.cell} user={user} />
                  ))}
                </div>
              )}
            </>
          )}
        </>
      )}
    </>
  )
})

export { UserList }
