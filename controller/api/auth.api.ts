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
  // async accountProfile(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`account/profile`, payload)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },

  // //
  // async vendorAccountProfile(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`account/profile/vendor`, payload)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },

  // //
  // async customerAccountProfile(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`account/profile/customer`, payload)
  //       .then(async (response) => response)

  //     return HandleAxiosResponse(response)
  //   } catch (error) {
  //     return HandleAxiosError(error)
  //   }
  // },

  // //
  // async resetPassword(payload: any) {
  //   try {
  //     const response = await default_axios_instance
  //       .post(`reset-password-mobile`, payload)
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
