import { types } from 'mobx-state-tree'
import { SessionModel } from 'stores/UiStateStore/models/SessionModel'
import { ModalRootModel } from './models/ModalRootModel'

const UiStateStore = types.model('UiStateStore', {
  session: types.optional(SessionModel, {}),
  modalRoot: types.optional(ModalRootModel, {}),
})

export { UiStateStore }
