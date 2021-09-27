import { types, Instance } from 'mobx-state-tree'

const ModalRootModel = types
  .model('ModalRootModel', {
    currentModal: types.maybeNull(types.string),
  })
  .volatile((self) => {
    return {
      options: {},
    }
  })
  .views((self) => ({}))
  .actions((self) => {
    const actions = {
      showModal(name: string, options = {}) {
        self.options = options
        self.currentModal = name
      },
      hideModal() {
        self.options = {}
        self.currentModal = null
      },
    }

    return actions
  })

export interface IModalRootModel extends Instance<typeof ModalRootModel> {}

export { ModalRootModel }
