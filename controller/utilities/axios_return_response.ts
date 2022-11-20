import { AxiosError, AxiosResponse } from 'axios'

const setResponseReturn = (data: any, status: any, error: any) => {
  return {
    data,
    status,
    error,
  }
}

export const HandleAxiosError = (error: AxiosError) => {
  const errorMessage = error.message

  // if error.messsge message is a string
  // if (errorMessage) return setResponseReturn(null, null, errorMessage)

  if (errorMessage) {
    // check if error is an array
    const errorIsArray = Array.isArray(errorMessage)
    if (errorIsArray) {
      const firstErrorMessage = errorIsArray ? errorMessage[0] : errorMessage

      if (errorMessage) return setResponseReturn(null, null, firstErrorMessage)
    }

    // if error is not an array
    return setResponseReturn(null, null, errorMessage)
  }

  const defaultError = 'Sorry, an error occurred'
  return setResponseReturn(null, status, defaultError) // return error.message || 'Sorry, an error occurred'
}

export const HandleAxiosResponse = async (response: AxiosResponse) => {
  const { data, status } = response

  return setResponseReturn(data, status, null)
}

// export const HandleTokenResponse = async (token: any) => {
//   if (!token) return 'Token not found'

//   sessionStorage.removeItem('token')
//   return sessionStorage.setItem('token', token)
// }
