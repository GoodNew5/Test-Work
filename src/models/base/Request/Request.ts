import axios, { AxiosRequestConfig } from 'axios'
import { flow, getRoot, types } from 'mobx-state-tree'

const { CancelToken } = axios

type CancelTokenType = { cancel: () => void, token: any } | null

const Request = types
  .model('Request', {
    state: types.maybeNull(types.string),
  })
  .views(self => ({
    get rootStore() {
      return getRoot(self)
    },
    get isPending(): boolean {
      return self.state === 'pending'
    },
    get isDone(): boolean {
      return self.state === 'done'
    },
    get isError(): boolean {
      return self.state === 'error'
    },
    get isNotSend(): boolean {
      return self.state === null
    },
  }))
  .actions(self => {
    let currentCall: CancelTokenType = null
    let result: any = null

    return ({
      send: flow(function* send<T, R extends { data: any; config: AxiosRequestConfig }>(action: (options: T) => Promise<R>, params: T) {
        try {
          if (currentCall) {
            currentCall.cancel()
          }

          currentCall = CancelToken.source()

          self.state = 'pending'

          result = yield action({ ...params, cancelToken: currentCall?.token })

          self.state = 'done'
        } catch (error) {
          self.state = 'error'

          throw error
        } finally {
          currentCall = null
          self.state = 'done'
        }

        return result
      }),
    })
  })

export {
  Request,
}
