import { types, Instance } from 'mobx-state-tree'

const NameModel = types
  .model('NameModel', {
    first: '',
    last: '',
  })
  .views((self) => ({
    get fullName(): string {
      return `${self.first} ${self.last}`
    },
  }))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface INameModel extends Instance<typeof NameModel> {}

export { NameModel }
