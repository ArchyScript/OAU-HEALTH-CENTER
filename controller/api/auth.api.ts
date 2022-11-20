import default_axios_instance from './axios_config'
import {
  HandleAxiosResponse,
  HandleAxiosError,
} from '../utilities/axios_return_response'

export const AuthApiService = {
  async login(payload: any) {
    // try {
    //   const response = await default_axios_instance
    //     .post(`login`, payload)
    //     .then(async (response) => response)
    //   return HandleAxiosResponse(response)
    // } catch (error) {
    //   return HandleAxiosError(error)
    // }
  },

  // async register(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`register`, payload)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },

  //
  async verifyEmail(payload: any) {
    try {
      const response = await default_axios_instance
        .post(`verify-email`, payload)
        .then(async (response) => response)

      return HandleAxiosResponse(response)
    } catch (error) {
      return HandleAxiosError(error)
    }
  },

  //
  // async resendVerificationCode(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`resend-verify-code`, payload)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },

  // //
  // async requestResetPassword(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`request-reset-password`, payload)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },

  // //
  // async logout() {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`logout`)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },
}
