import { z } from 'zod'
export const env = {
  COGNITO_USER_POOL_ID: z.string().parse(process.env.REDWOOD_ENV_COGNITO_USER_POOL_ID),
  COGNITO_CLIENT_ID: z.string().parse(process.env.REDWOOD_ENV_COGNITO_CLIENT_ID),
  AMAZON_COGNITO_REGION: z.string().parse(process.env.REDWOOD_ENV_AMAZON_COGNITO_REGION),
  IDENTITY_POOL_REGION: z.string().parse(process.env.REDWOOD_ENV_IDENTITY_POOL_REGION)
}
