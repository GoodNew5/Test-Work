import { types, Instance } from 'mobx-state-tree'

const FilterByGenderModel = types
  .model('FilterByGenderModel', {
    value: 'all',
  })
  .views((self) => ({
    isGenderMatchFilter(value: string): boolean {
      return self.value === 'all' || self.value === value
    },
  }))
  .actions((self) => {
    const actions = {
      set(value: string) {
        self.value = value
      },
    }

    return actions
  })

export interface IFilterByGenderModel extends Instance<typeof FilterByGenderModel> {}

export { FilterByGenderModel }
