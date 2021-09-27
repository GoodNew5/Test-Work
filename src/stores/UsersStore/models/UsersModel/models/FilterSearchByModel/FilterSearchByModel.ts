import { types, Instance } from 'mobx-state-tree'

const FilterSearchByModel = types
  .model('FilterSearchByModel', {
    value: '',
  })
  .views((self) => ({
    isSearchMatch(fullName: string, address: string) {
      return (
        !self.value ||
        fullName.toLowerCase().includes(self.value.trim().toLowerCase()) ||
        address.toLowerCase().includes(self.value.trim().toLowerCase())
      )
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

export interface IFilterSearchByModel extends Instance<typeof FilterSearchByModel> {}

export { FilterSearchByModel }
