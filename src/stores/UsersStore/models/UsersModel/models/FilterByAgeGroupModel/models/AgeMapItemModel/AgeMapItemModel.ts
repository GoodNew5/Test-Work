import { types, Instance } from 'mobx-state-tree'

const AgeMapItemModel = types
  .model('AgeMapItemModel', {
    label: '',
    min: 0,
    max: 0,
    isChecked: false,
  })
  .views((self) => ({}))
  .actions((self) => {
    const actions = {
      set() {
        self.isChecked = !self.isChecked
      },
    }

    return actions
  })

export interface IAgeMapItemModel extends Instance<typeof AgeMapItemModel> {}

export { AgeMapItemModel }
