import { types, Instance } from 'mobx-state-tree'
import format from 'date-fns/esm/format'

const RegisteredModel = types
  .model('RegisteredModel', {
    age: 0,
    date: '',
  })
  .views((self) => ({
    get formatedDate() {
      return format(new Date(self.date), 'dd.MM.yyyy')
    },
  }))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface IRegisteredModel extends Instance<typeof RegisteredModel> {}

export { RegisteredModel }
