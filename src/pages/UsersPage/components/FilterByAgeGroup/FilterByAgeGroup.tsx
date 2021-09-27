import { Checkbox } from 'baseComponents/Checkbox'
import { observer } from 'mobx-react-lite'
import { IFilterByAgeGroupModel } from 'stores/UsersStore/models/UsersModel/models/FilterByAgeGroupModel'
import styles from './FilterByAgeGroup.module.scss'

type TProps = {
  filterByAgeGroup: IFilterByAgeGroupModel
}

const FilterByAgeGroup = observer((props: TProps) => {
  const { filterByAgeGroup } = props
  const { ageGroupMap } = filterByAgeGroup

  return (
    <div className={styles.FilterByAgeGroup}>
      <h3 className={styles.title}>Фильтр по возрастным группам </h3>
      <div className={styles.row}>
        {ageGroupMap.map((item) => (
          <div key={item.label}>
            <Checkbox
              classNameLabel={styles.label}
              checked={item.isChecked}
              onChange={item.set}
            >
              {item.label}
            </Checkbox>
          </div>
        ))}
      </div>
    </div>
  )
})

export { FilterByAgeGroup }
