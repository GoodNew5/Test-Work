import { Store } from 'models/base/Store'
import { Instance, types } from 'mobx-state-tree'

const SessionModel = types
  .compose(
    Store,
    types
      .model('SessionModel', {
        isFetched: false,
      })
      .actions((self) => {
        const actions = {}

        return actions
      })
  )
  .views((self) => {
    return {
      get isAuthorized() {
        return true
      },
    }
  })

export interface ISessionModel extends Instance<typeof SessionModel> {}

export { SessionModel }
