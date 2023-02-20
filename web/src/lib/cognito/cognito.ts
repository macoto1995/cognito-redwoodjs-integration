import { navigate, routes } from '@redwoodjs/router';
import { Auth } from 'aws-amplify';
import { z } from 'zod';
import { CognitoUser, CognitoSignUpResult, CognitoSignUpConfirm } from './schema';

const UserSchema = z.object({
  original: CognitoUser,
  id: z.string(),
  email: z.string().email()
})

type User = z.infer<typeof UserSchema>


const handleSignUpResult = (result: CognitoSignUpResult, email: string) => {
  if (!result.userConfirmed){
    localStorage.setItem('email', email)
    navigate(routes.confirmEmail())
    return null
  }
  const cognitoUser = result.user
  return ({
    id: cognitoUser.username,
    email,
    original: cognitoUser,
    roles: []
  })
}

type LoginInput = { email: string, password: string }
type SignUpInput = { email: string, password: string } | { code: string }

export type AuthClient = {
  type: 'custom-auth',
  login: (input: LoginInput) => Promise<User>
  logout: () => Promise<unknown>
  signup: (input: SignUpInput) => Promise<User | null>
  getToken: () => Promise<string | null>
  getUserMetadata: () => Promise<User | null>
}

export const authClient: AuthClient = {
  type: 'custom-auth',
  login: async ({ email, password }: LoginInput) => {
    const user = await Auth.signIn(email, password)
    const cognitoUser = CognitoUser.parse(user)

    return({
      id: cognitoUser.username,
      email,
      original: cognitoUser,
      roles: [],
    })
  },
  signup: async (input: SignUpInput) => {
    if('code' in input) {
      const { code } = input
      const email = localStorage.getItem('email')
      if (!email) throw new Error('Email is not set.')
      console.log({email, code});


      try {
        const result = await Auth.confirmSignUp(email, code)
        console.log({result});
        const signUpConfirmResult = CognitoSignUpConfirm.parse(result)
        console.log({signUpConfirmResult});

        const user = await getUserMetadata()
        console.log(user);
        return user
      } catch (error) {
        if (error instanceof Error && 'code' in error) {
          switch (error.code) {
            case 'ExpiredCodeException':
              alert('The code has been expired. Please request a code again.')
              break;
            // case 'ANOTHER ERROR CODES COME HERE':
            // ref https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html#API_InitiateAuth_Errors
            //   break;
          }
        }
        throw error
      }
    }
    else {
      const { email, password } = input

      const result = await Auth.signUp({
        username: email,
        password,
        attributes: { email },
        autoSignIn: { enabled: true }
      });
      console.log({result});

      const signUpResult = CognitoSignUpResult.parse(result)
      return handleSignUpResult(signUpResult, email)

    }
  },
  logout: () => {
    return Auth.signOut()
  },
  getToken: async () => {
    const currentSession = await Auth.currentSession()
    return currentSession.getAccessToken().getJwtToken()
  },
  getUserMetadata: async () => {
    const user = await Auth.currentAuthenticatedUser({bypassCache: true})
    const cognitoUser = CognitoUser.parse(user)
    return ({
      id: cognitoUser.username,
      email: cognitoUser.attributes?.email || '',
      original: cognitoUser,
      roles: []
    })
  }
}

export const getUserMetadata = async () => {
  const user = await Auth.currentAuthenticatedUser({bypassCache: true})
  const cognitoUser = CognitoUser.parse(user)
  return ({
    id: cognitoUser.username,
    email: cognitoUser.attributes?.email || '',
    original: cognitoUser,
    roles: []
  })
}

export const resendVerificationCode = () => {
  const email = localStorage.getItem('email')
  if (!email) throw new Error('Email is not set.')
  return Auth.resendSignUp(email)
}
