import { types, Instance } from 'mobx-state-tree'

const UserAvatarModel = types
  .model('UserAvatarModel', {
    thumbnail: '',
    large: '',
  })
  .views((self) => ({}))
  .actions((self) => {
    const actions = {}

    return actions
  })

export interface IUserAvatarModel extends Instance<typeof UserAvatarModel> {}

export { UserAvatarModel }
