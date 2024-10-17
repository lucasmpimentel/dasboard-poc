"use client";
import { useForm } from 'react-hook-form';
import CardWrapper from '../../components/card-wrapper';
import { registerSchema } from '../../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useFormStatus } from 'react-dom';

export default function RegisterForm() {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: '',
      name: '',
      password: '',
      passwordConfirmation: '',
    }
  });

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log(data);
  };

  const { pending } = useFormStatus();

  return (
    <CardWrapper 
      title={'Cadastrar'} 
      label={'Crie sua conta abaixo'} 
      backButtonHref={'/auth/login'} 
      backButtonLabel={'Já possui cadastro? Faça o login aqui.'}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-6'>
          <div className='space-y-4'>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='email@provedor.com' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder='Jhon Doe' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Senha</FormLabel>
                  <FormControl>
                    <Input type='password' {...field} placeholder='******' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="passwordConfirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirme sua senha</FormLabel>
                  <FormControl>
                    <Input {...field} type='password' placeholder='******' />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type='submit' className='w-full' disabled={pending}>
            Cadastrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
