'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { contactSchema } from '@/types/contact-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type FormData = z.infer<typeof contactSchema>

export default function ContactForm() {
  const { toast } = useToast()

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(contactSchema),
  })
  const [isSending, setIsSending] = useState<boolean>(false)

  async function onSubmit(data: FormData) {
    setIsSending(true)

    const response = await fetch(`/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        lastName: data.lastName,
        firstName: data.firstName,
        email: data.email,
        phone: data.phone,
        message: data.message,
      }),
    })

    setIsSending(false)

    if (!response?.ok) {
      return toast({
        title: 'Il y a eu une érreur.',
        description: "Votre message n'a pas pu être envoyer. Veuillez réessayer.",
      })
    }

    toast({
      description: 'Votre message a bien été envoyé, merci.',
    })

    reset()
  }

  return (
    <form className='mx-auto mt-16 max-w-xl sm:mt-20' onSubmit={handleSubmit(onSubmit)}>
      <div className='grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2'>
        <div>
          <Label htmlFor='lastName'>Nom</Label>
          <div className='mt-2.5'>
            <Input type='text' autoComplete='family-name' {...register('lastName')} />
            {errors?.lastName && (
              <p className='px-1 text-xs text-red-600'>{errors.lastName.message}</p>
            )}
          </div>
        </div>
        <div>
          <Label htmlFor='firstName'>Prénom</Label>
          <div className='mt-2.5'>
            <Input type='text' autoComplete='given-name' {...register('firstName')} />
            {errors?.firstName && (
              <p className='px-1 text-xs text-red-600'>{errors.firstName.message}</p>
            )}
          </div>
        </div>
        <div className='sm:col-span-2'>
          <Label htmlFor='email'>Email</Label>
          <div className='mt-2.5'>
            <Input type='email' autoComplete='email' {...register('email')} />
            {errors?.email && <p className='px-1 text-xs text-red-600'>{errors.email.message}</p>}
          </div>
        </div>
        <div className='sm:col-span-2'>
          <Label htmlFor='phone'>Téléphone</Label>
          <div className='relative mt-2.5'>
            <Input type='tel' autoComplete='tel' {...register('phone')} />
            {errors?.phone && <p className='px-1 text-xs text-red-600'>{errors.phone.message}</p>}
          </div>
        </div>
        <div className='sm:col-span-2'>
          <Label htmlFor='message'>Message</Label>
          <div className='mt-2.5'>
            <Textarea rows={4} defaultValue={''} {...register('message')} />
            {errors?.message && (
              <p className='px-1 text-xs text-red-600'>{errors.message.message}</p>
            )}
          </div>
        </div>
      </div>
      <Button type='submit' className='mt-10 w-full'>
        {isSending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
        Envoyer
      </Button>
    </form>
  )
}
