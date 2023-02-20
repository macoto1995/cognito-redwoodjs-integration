import { z } from "zod"

export const AMAZON_COGNITO_REGION = z.string().parse(process.env.REDWOOD_ENV_AMAZON_COGNITO_REGION)
export const IDENTITY_POOL_REGION = z.string().parse(process.env.REDWOOD_ENV_IDENTITY_POOL_REGION)
export const COGNITO_USER_POOL_ID = z.string().parse(process.env.REDWOOD_ENV_COGNITO_USER_POOL_ID)
export const COGNITO_CLIENT_ID = z.string().parse(process.env.REDWOOD_ENV_COGNITO_CLIENT_ID)
