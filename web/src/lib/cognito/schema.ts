import { z } from 'zod'

export const CognitoUser = z.object({
  attributes: z.object({
    sub: z.string(),
    email_verified: z.boolean(),
    email: z.string().email()
  }).optional(),
  authenticationFlowType: z.enum(["USER_SRP_AUTH"]), // まだあるはず
  keyPrefix: z.string(),
  pool: z.object({
    userPoolId: z.string(),
    clientId: z.string(),
    advancedSecurityDataCollectionFlag: z.boolean(),
  }),
  preferredMFA: z.enum(["NOMFA"]).optional(), // まだあるはず
  signInUserSession: z.object({
    accessToken: z.object({
      jwtToken: z.string(),
      payload: z.object({
        auth_time: z.number(),
        client_id: z.string(),
        event_id: z.string(),
        exp: z.number(),
        iat: z.number(),
        iss: z.string(),
        jti: z.string(),
        origin_jti: z.string(),
        scope: z.string(),
        sub: z.string(),
        token_use: z.enum(["access"]), // まだあるはず
        username: z.string(),
      })
    }),
    clockDrift: z.number(),
    idToken: z.object({
      jwtToken: z.string(),
      payload: z.object({
        sub: z.string(),
        email_verified: z.boolean(),
        iss: z.string(),
        'cognito:username': z.string(),
        origin_jti: z.string(),
      }).optional(),
      refreshToken: z.object({
        token: z.string()
      }).optional()
    }),
  }).nullable(),
  userDataKey: z.string(),
  username: z.string(),
})

export const CognitoSignUpResult = z.object({
  codeDeliveryDetails: z.object({
    AttributeName: z.string(),
    DeliveryMedium: z.enum(['EMAIL']), // まだある
    Destination: z.string(),
  }),
  user: CognitoUser,
  userConfirmed: z.boolean(),
  userSub: z.string()
})

export const CognitoSignUpConfirm = z.enum(['SUCCESS'])

export type CognitoSignUpResult = z.infer<typeof CognitoSignUpResult>

