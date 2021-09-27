import { types, Instance } from 'mobx-state-tree'
import { DobModel } from './models/DobModel'
import { LocationModel } from './models/LocationModel'
import { NameModel } from './models/NameModel'
import { RegisteredModel } from './models/RegisteredModel'
import { UserAvatarModel } from './models/UserAvatarModel'

const UserModel = types
  .model('UserModel', {
    cell: '', // as userId
    name: types.optional(NameModel, {}),
    gender: '',
    location: types.optional(LocationModel, {}),
    registered: types.optional(RegisteredModel, {}),
    dob: types.optional(DobModel, {}),
    picture: types.optional(UserAvatarModel, {}),
  })
  .views((self) => ({
    get translatedGender() {
      return `${
        self.gender === 'male' ? 'Мужской' : self.gender === 'female' ? 'Женский' : ''
      }`
    },
  }))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface IUserModel extends Instance<typeof UserModel> {}

export { UserModel }
