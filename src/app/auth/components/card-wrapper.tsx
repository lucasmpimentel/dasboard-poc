"use client";
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import AuthHeader from './auth-header';
import BackButton from '@/components/back-button/back-button';

interface CradWrapperProps {
  label: string
  title: string
  backButtonHref: string
  backButtonLabel: string
  children: React.ReactNode
}

export default function CardWrapper({label, title, backButtonHref, backButtonLabel, children}: CradWrapperProps) {
  return (
    <Card className='xl:w-1/4 md:w-1/2 shadow-md'>
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  )
}
