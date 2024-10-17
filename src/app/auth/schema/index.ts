import * as z from 'zod';

interface RegisterSchema {
  email: string;
  name: string;
  password: string;
  passwordConfirmation: string;
}

interface LoginSchema {
  email: string;
  password: string;
}

export const registerSchema: z.ZodSchema<RegisterSchema> = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  name: z.string().min(3, { message: 'Nome precisa ter ao menos 3 caracteres'}),
  password: z.string().min(6, { message: 'Senha precisa ter ao menos 6 caracteres' }),
  passwordConfirmation: z.string().min(6, { message: 'Senha precisa ter ao menos 6 caracteres' }),
  }).refine((data) => data.password === data.passwordConfirmation, {
    message: 'Senhas não conferem',
    path: ['passwordConfirmation'],
});

export const loginSchema: z.ZodSchema<LoginSchema> = z.object({
  email: z.string().email({ message: 'Email inválido' }),
  password: z.string().min(6, { message: 'Senha precisa ter ao menos 6 caracteres' }),
});
