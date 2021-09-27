import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { FilterSearchBy } from './components/FilterSearchBy'
import { FilterByAgeGroup } from './components/FilterByAgeGroup'
import { FilterByGender } from './components/FilterByGender'
import { UserList } from './components/UserList'
import styles from './UsersPage.module.scss'

type TProps = {}

const UsersPage = observer((props: TProps) => {
  const { usersStore } = useStore()
  const { users, resetStore } = usersStore
  const { getUsers, filterByGender, filterByAgeGroup, filterSearchBy } = users

  useEffect(() => {
    getUsers()
    return resetStore
  }, [getUsers, resetStore])

  return (
    <div className={styles.container}>
      <FilterSearchBy filterSearchBy={filterSearchBy} />
      <div className={styles.row}>
        <FilterByGender filterByGender={filterByGender} />
        <FilterByAgeGroup filterByAgeGroup={filterByAgeGroup} />
      </div>
      <UserList users={users} />
    </div>
  )
})

export { UsersPage }
