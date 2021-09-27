import { apiEndpoints } from 'config/apiEndpoints'
import { request } from 'services/request'
import { AxiosRequestConfig, CancelToken } from 'axios'

type TParams = {
  cancelToken?: CancelToken
}

const DEFAULT_USER_LIMIT = 30

export const loadUsers = async (params: TParams) => {
  const URL = apiEndpoints.APP.GET_USERS
  const { cancelToken } = params

  const requestParams: AxiosRequestConfig = {
    method: 'GET',
    cancelToken,
    params: {
      results: DEFAULT_USER_LIMIT,
    },
  }

  const response = await request(URL, requestParams)
  const result = response?.data.results

  return result
}
