import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Controller, useForm, FormProvider } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormControl, FormErrorMessage, FormLabel, HStack, Input, PinInput, PinInputField } from '@chakra-ui/react'
import { useAuth } from 'src/auth'
import { resendVerificationCode } from 'src/lib/cognito/cognito'

const confirmEmailSchema = z.object({
  code: z.string().length(6)
})

const ConfirmEmailPage = () => {
  const { signUp } = useAuth()
  const { control, handleSubmit, register, formState: { errors }} = useForm({
    mode: 'onChange',
    resolver: zodResolver(confirmEmailSchema)
  })

  return (
    <>
      <MetaTags title="ConfirmEmail" description="ConfirmEmail page" />

      <h1>ConfirmEmailPage</h1>
      <form
        onSubmit={handleSubmit((data) => {
          signUp({ code: data.code }).then(() => {
            navigate(routes.authRequiredPage())
          })
        })}
      >
          <FormControl >
            <FormLabel>Code</FormLabel>
            <Input {...register('code')}/>
            <FormErrorMessage >
              {errors.code}
            </FormErrorMessage>
          </FormControl>
          <button type='submit'>Confirm</button>
      </form>
      <br />
      <button onClick={resendVerificationCode}>
        Resend Verification Code
      </button>

      <br />
      <br />
      <a href={routes.signup()} >
        Use Another Email
      </a>
    </>
  )
}

export default ConfirmEmailPage
