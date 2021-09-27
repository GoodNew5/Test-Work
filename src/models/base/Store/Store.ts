import { types, getSnapshot, applySnapshot, Instance } from 'mobx-state-tree'

/** https://github.com/mobxjs/mobx-state-tree/issues/791 */
const Store = types.model('Store', {}).actions((self) => {
  let initialState = {}

  return {
    afterCreate() {
      initialState = getSnapshot(self)
    },
    resetStore() {
      applySnapshot(self, initialState)
    },
  }
})

export { Store }

export interface IStore extends Instance<typeof Store> {}
