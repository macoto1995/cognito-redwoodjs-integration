import { createAuthentication } from '@redwoodjs/auth'
import { authClient } from './lib/cognito/cognito';

// If you're integrating with an auth service provider you should delete this interface
// This type should be inferred from the general interface above
export interface ValidateResetTokenResponse {
  error?: string
  [key: string]: string | undefined
}


function createAuth() {
  const authImplementation = authClient

  // You can pass custom provider hooks here if you need to as a second
  // argument. See the Redwood framework source code for how that's used
  return createAuthentication(authImplementation)
}

export const { AuthProvider, useAuth } = createAuth()
