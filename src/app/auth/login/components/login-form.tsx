"use client";
import { useForm } from 'react-hook-form';
import CardWrapper from '../../components/card-wrapper';
import { loginSchema } from '../../schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { useFormStatus } from 'react-dom';

export default function LoginForm() {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    }
  });

  const onSubmit = (data: z.infer<typeof loginSchema>) => {
    console.log(data);
  };

  const { pending } = useFormStatus();

  return (
    <CardWrapper 
      title={'Login'} 
      label={'Entre em sua conta abaixo'} 
      backButtonHref={'/auth/cadastro'} 
      backButtonLabel={'Ainda não possui cadastro? Faça aqui.'}
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
          </div>
          <Button type='submit' className='w-full' disabled={pending}>
            Entrar
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}
