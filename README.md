# README

## What's this repo?
This is implementation of authentiaction of Redwood.js with Amazon Cognito

## How to use it?
1. Create Cognito User Pool with your AWS account.
2. Get AMAZON_COGNITO_REGION, IDENTITY_POOL_REGION, COGNITO_USER_POOL_ID, COGNITO_CLIENT_ID from your AWS console.
  - http://docs.aws.amazon.com/cognito/latest/developerguide/getting-started-with-cognito-user-pools.html
3. Create a .env file and Set values above as .env.example does.
4. run `yarn install` and `yarn rw dev` to start
5. visit http://localhost:8910/signup to signup or visit http://localhost:8910/login to login to your account on cognito
