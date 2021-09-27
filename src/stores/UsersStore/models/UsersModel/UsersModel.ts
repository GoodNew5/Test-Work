import { types, Instance, flow, getSnapshot } from 'mobx-state-tree'
import { IUserModel, UserModel } from 'models/UserModel'
import { Request } from 'models/base/Request'
import { api } from 'services/api'
import { storage } from 'services/storage'
import { FilterByAgeGroupModel } from './models/FilterByAgeGroupModel'
import { FilterByGenderModel } from './models/FilterByGenderModel'
import { FilterSearchByModel } from './models/FilterSearchByModel'

const UsersModel = types
  .model('UsersModel', {
    list: types.maybeNull(types.array(UserModel)),
    getUsersRequest: types.optional(Request, {}),
    filterByGender: types.optional(FilterByGenderModel, {}),
    filterByAgeGroup: types.optional(FilterByAgeGroupModel, {}),
    filterSearchBy: types.optional(FilterSearchByModel, {}),
  })
  .views((self) => ({
    get isLoading() {
      return self.getUsersRequest.isPending
    },
    get isFetched() {
      return self.getUsersRequest.isDone
    },
    get filteredUserList(): IUserModel[] {
      if (!self.list) {
        return []
      }

      const { isGenderMatchFilter } = self.filterByGender
      const { isAgeMatchFilter } = self.filterByAgeGroup
      const { isSearchMatch } = self.filterSearchBy

      return self.list.filter((item: IUserModel) => {
        return (
          isGenderMatchFilter(item.gender) &&
          isAgeMatchFilter(item.dob.age) &&
          isSearchMatch(item.name.fullName, item.location.fullAddress)
        )
      })
    },
  }))
  .actions((self) => {
    const actions = {
      getUsers: flow(function* load() {
        try {
          const storedUserList = storage.get('users') || []
          if (!storedUserList.length) {
            const data = yield self.getUsersRequest.send(api.loadUsers, {})
            self.list = data

            if (self.list?.length) {
              storage.set('users', getSnapshot(self.list))
            }
          } else {
            self.list = storedUserList
          }
        } catch (error) {
          console.error(error)
          self.list = null
        }
      }),
    }

    return actions
  })

export interface IUsersModel extends Instance<typeof UsersModel> {}

export { UsersModel }
