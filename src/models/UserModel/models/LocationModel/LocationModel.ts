import { types, Instance } from 'mobx-state-tree'

const LocationModel = types
  .model('LocationModel', {
    city: '',
    country: '',
  })
  .views((self) => ({
    get fullAddress() {
      return `${self.country}, ${self.city}`
    },
  }))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface ILocationModel extends Instance<typeof LocationModel> {}

export { LocationModel }
