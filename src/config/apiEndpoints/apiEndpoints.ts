import { appConstants } from 'config/constants'

const BASE = `${appConstants.API_BASE_URL}`

export const apiEndpoints = {
  APP: {
    GET_USERS: `${BASE}`,
  },
}
