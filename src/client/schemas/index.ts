import * as z from 'zod'

export const LoginSchema = z.object({
  email: z.string().email({
    message: 'El correo es requerido'
  }),
  password: z.string().min(1, {
    message: 'La contraseña es requerida'
  })
})

export const RegisterSchema = z.object({
  email: z.string().email({
    message: 'El correo es requerido'
  }),
  password: z.string().min(8, {
    message: 'La contraseña debe tener mínimo 8 caracteres'
  }),
  name: z.string().min(1, {
    message: 'El nombre de usaurio es requerido'
  }),
  image: z.optional(z.string())
})
