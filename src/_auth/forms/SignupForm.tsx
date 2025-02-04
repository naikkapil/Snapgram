import React from 'react'
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {Button} from '@/components/ui/button'
import { useForm } from 'react-hook-form'
import { SignupValidation } from '@/lib/validations'

 
// const formSchema = z.object({
//   username: z.string().min(2).max(50),
// })

const SignupForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof SignupValidation>>({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      name:'',
      username: '',
      email:'',
      password:''
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof SignupValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
      <Form {...form}>
        <div className='sm:w-420 flex-center flex-col'>
          <img src='./assets/images/logo.svg' alt='logo'/>
          <h2 className='h3-bold md:h2-bold pt-5 sm:pt-12'>Create a new account</h2>
          <p className='text-light-3 small-medium md:base-regular mt-2'>To use Snapgram enter your details</p>
        
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-5 w-ful mt-4">
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
      </div>
    </Form>
  )
}

export default SignupForm
