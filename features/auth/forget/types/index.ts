import { z } from 'zod'

export const forgetPassSchema = z.object({
  email: z.string().email(),
})

export type ForgetPassRequest = z.infer<typeof forgetPassSchema>

export const otpSchema = z.object({
  otp: z.string().optional(),
})

export type OTPRequest = z.infer<typeof otpSchema>

export const resetPassSchema = z.object({
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
})

export type ResetPassRequest = z.infer<typeof resetPassSchema>
