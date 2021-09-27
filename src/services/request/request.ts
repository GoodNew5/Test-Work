import axios from 'axios'
import { storage } from 'services/storage'
import { appConstants } from 'config/constants'

const request = axios.create()

request.interceptors.request.use((config) => {
  const conf = config
  conf.baseURL = appConstants.API_BASE_URL

  const token = storage.get(appConstants.TOKEN_STORAGE_KEY, true)

  if (token) {
    conf.headers.common.Authorization = `Bearer ${token}`
  }

  // conf.headers.common['app-version'] = appConstants.VERSION

  return conf
}, error => Promise.reject(error))

request.interceptors.response.use(response => response,
  (error) => {
    /** SET API ERROR FORMAT:
     * data.errors[string]
     */
    // console.error('RESPONSE:', error.response?.data?.data?.errors ?? error)
    return Promise.reject(error.response?.data?.data?.errors?.[0] ?? error)
  })

export {
  request,
}
