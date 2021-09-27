import { types, Instance } from 'mobx-state-tree'
import { AgeMapItemModel } from './models/AgeMapItemModel'

const ageGroupMap = [
  {
    label: '0-18',
    min: 0,
    max: 18,
    isChecked: false,
  },
  {
    label: '18-35',
    min: 18,
    max: 35,
    isChecked: false,
  },
  {
    label: '35-65',
    min: 35,
    max: 65,
    isChecked: false,
  },
  {
    label: '65+',
    min: 65,
    max: Infinity,
    isChecked: false,
  },
]

const FilterByAgeGroupModel = types
  .model('FilterByAgeGroup', {
    ageGroupMap: types.optional(types.array(AgeMapItemModel), ageGroupMap),
  })
  .views((self) => ({
    isAgeMatchFilter(age: number): boolean {
      const checkedGroups = self.ageGroupMap.filter((item) => item.isChecked)
      if (!checkedGroups.length) {
        return true
      }

      return checkedGroups.some((element) => {
        return age >= element.min && age <= element.max
      })
    },
  }))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface IFilterByAgeGroupModel extends Instance<typeof FilterByAgeGroupModel> {}

export { FilterByAgeGroupModel }
