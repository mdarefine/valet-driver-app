import { z } from 'zod'

export const loginSchema = z.object({
  identifier: z.string({
    required_error: 'Email/Phone Number is required',
  }).email('Invalid email format'),
  password: z.string({
    required_error: 'Password is required',
  }).min(8, 'Password must be at least 8 characters'),
})

export type LoginRequest = z.infer<typeof loginSchema>
