import { RadioButton } from 'baseComponents/RadioButton'
import { observer } from 'mobx-react-lite'
import { IFilterByGenderModel } from 'stores/UsersStore/models/UsersModel/models/FilterByGenderModel'
import styles from './FilterByGender.module.scss'

type TProps = {
  filterByGender: IFilterByGenderModel
}

const FilterByGender = observer((props: TProps) => {
  const { filterByGender } = props
  const { set, value } = filterByGender

  return (
    <div className={styles.FilterByGender}>
      <h4 className={styles.title}>Фильтр по полу</h4>
      <RadioButton
        size="one"
        className={styles.radioButton}
        classNameLabel={styles.label}
        name="gender"
        kind="one"
        value="all"
        checked={value === 'all'}
        onChange={(e) => set(e.target.value)}
      >
        Все
      </RadioButton>
      <RadioButton
        className={styles.radioButton}
        size="one"
        kind="one"
        value="male"
        classNameLabel={styles.label}
        name="gender"
        checked={value === 'male'}
        onChange={(e) => set(e.target.value)}
      >
        Только мужчины
      </RadioButton>
      <RadioButton
        className={styles.radioButton}
        size="one"
        kind="one"
        value="female"
        classNameLabel={styles.label}
        name="gender"
        checked={value === 'female'}
        onChange={(e) => set(e.target.value)}
      >
        Только женщины
      </RadioButton>
    </div>
  )
})

export { FilterByGender }
