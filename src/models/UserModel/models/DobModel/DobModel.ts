import { types, Instance } from 'mobx-state-tree'

const DobModel = types
  .model('DobModel', {
    age: 0,
    date: '',
  })
  .views((self) => ({}))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface IDobModel extends Instance<typeof DobModel> {}

export { DobModel }
