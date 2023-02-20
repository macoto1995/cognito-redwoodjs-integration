import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { navigate, routes } from '@redwoodjs/router'

const signupSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const SignupPage = () => {
  const { signUp } = useAuth()
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(signupSchema)
  })

  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <form onSubmit={handleSubmit((data) => {
        signUp({ email: data.email, password: data.password })
      })}>
        <FormControl >
          <FormLabel>Email address</FormLabel>
          <Input type='email' {...register('email')} />
          <FormErrorMessage>
            {errors.email}
          </FormErrorMessage>
        </FormControl>
        <FormControl >
          <FormLabel>password</FormLabel>
          <Input type='password' {...register('password')} />
          <FormErrorMessage >
            {errors.password}
          </FormErrorMessage>
        </FormControl>
        <button type='submit'>Sign Up</button>
      </form>

      <br/> <br />

      <a href={routes.login()}>Login</a>
    </>
  )
}

export default SignupPage
