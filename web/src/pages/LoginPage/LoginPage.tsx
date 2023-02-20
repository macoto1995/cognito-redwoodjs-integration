import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react'
import { navigate, routes } from '@redwoodjs/router'


const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

const LoginPage = () => {
  const { logIn } = useAuth()
  const { register, handleSubmit, formState: {errors} } = useForm({
    resolver: zodResolver(loginSchema)
  })
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>LoginPage</h1>
      <form onSubmit={handleSubmit((data) => {
        logIn({ email: data.email, password: data.password }).then(() => {
          navigate(routes.authRequiredPage())
        })

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
        <button type='submit'>Login</button>
      </form>

      <br/>
      <button onClick={() => navigate(routes.signup())}>
        Sign Up
      </button>
    </>
  )
}

export default LoginPage
