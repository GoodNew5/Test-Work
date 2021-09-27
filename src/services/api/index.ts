import axios from 'axios'
import { loadUsers } from './methods/loadUsers'

export const { CancelToken } = axios

export const api = { loadUsers }
