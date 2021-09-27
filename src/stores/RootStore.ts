import { Instance, types } from 'mobx-state-tree'
import { UiStateStore } from './UiStateStore'
import { UsersStore } from './UsersStore'

const RootStore = types
  .model('RootStore', {
    uiStateStore: types.optional(UiStateStore, {}),
    usersStore: types.optional(UsersStore, {}),
  })
  .actions(() => {
    return {
      afterCreate() {},
    }
  })

export interface IRootStore extends Instance<typeof RootStore> {}

export { RootStore }
