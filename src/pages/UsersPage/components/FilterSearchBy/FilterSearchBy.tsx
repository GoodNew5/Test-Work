import { Field } from 'baseComponents/Field'
import { Icon } from 'baseComponents/Icon'
import { observer } from 'mobx-react-lite'
import { IFilterSearchByModel } from 'stores/UsersStore/models/UsersModel/models/FilterSearchByModel'
import styles from './FilterSearchBy.module.scss'

type TProps = {
  filterSearchBy: IFilterSearchByModel
}

const FilterSearchBy = observer((props: TProps) => {
  const { filterSearchBy } = props
  const { value, set } = filterSearchBy

  return (
    <div className={styles.filterSearchBy}>
      <Field
        placeholder="Начните вводить имя / фамилию / адрес"
        size="one"
        kind="one"
        value={value}
        onChange={(e) => set(e.target.value)}
        classNameEndComponent={styles.endComponent}
        endComponent={<Icon className={styles.icon} name="search" />}
      />
    </div>
  )
})

export { FilterSearchBy }
