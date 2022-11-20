import axios from 'axios'
const API_BASE_URL = 'https://api.oauhealthcenter.com/api/'

// verify auth token before any request

export const getAuthHeaders = (): any => {
  let accessToken = localStorage.getItem('user_token')

  accessToken = !accessToken || accessToken === undefined ? '' : accessToken

  const headers = {
    token: accessToken,
  }

  return headers
}

const default_axios_instance = axios.create({
  baseURL: API_BASE_URL,
  headers: getAuthHeaders(),
})

export default default_axios_instance
