import { types, Instance } from 'mobx-state-tree'
import { Store } from 'models/base/Store'
import { UsersModel } from './models/UsersModel'

const UsersStore = types.compose(
  Store,
  types
    .model('UsersStore', {
      users: types.optional(UsersModel, {}),
    })
    .views((self) => ({}))
    .actions((self) => {
      const actions = {}

      return actions
    })
)

export interface IUsersStore extends Instance<typeof UsersStore> {}

export { UsersStore }
