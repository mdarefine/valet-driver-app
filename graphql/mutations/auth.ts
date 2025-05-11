import { gql } from '../__generated__'

export const REGISTER =
  gql(`mutation Register($input: UsersPermissionsRegisterInput!) {
    register(input: $input) {
      jwt
      user {
        id
        username
        role {
          id
          name
        }
        email
        documentId
      }
    }
  }`)
export const LOGIN = gql(`mutation Login($input: UsersPermissionsLoginInput!) {
 login(input: $input) {
    jwt
    user {
      id
      documentId
      username
      email
      confirmed
      blocked
      profile
      role {
        id
        name
      }    
    }
  }
}
`)

export const FORGOT_PASSWORD = gql(`mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email) {
    ok
  }
}`)

export const RESEND_OTP = gql(`mutation ResendOtp($input: ResendOTPInput!) {
  resendOtp(input: $input)
}`)

export const VERIFY_OTP = gql(`mutation VerifyOtp($input: VerifyOtpInput!) {
  verifyOtp(input: $input)
}`)

export const RESET_PASSWORD =
  gql(`mutation ResetPassword($password: String!, $passwordConfirmation: String!, $code: String!) {
  resetPassword(password: $password, passwordConfirmation: $passwordConfirmation, code: $code) {
    jwt
  }
}
`)
