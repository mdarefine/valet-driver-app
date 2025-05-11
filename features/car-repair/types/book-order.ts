import { z } from 'zod'

export const bookOrderSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
  }),
  vehicle: z.string({
    required_error: 'Vehicle is required',
  }),
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  contact: z.number({ required_error: 'Contact is required' }),
  message: z.string({ required_error: 'Message is required' }),
  date: z.string({ required_error: 'Date is required' }),
  time: z.string({ required_error: 'Time is required' }),
})

export type BookOrderRequest = z.infer<typeof bookOrderSchema>
