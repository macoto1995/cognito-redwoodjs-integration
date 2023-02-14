import { Amplify } from 'aws-amplify';

import { env } from 'src/env';

Amplify.configure({
  Auth: {

      // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
      // identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',

      // REQUIRED - Amazon Cognito Region
      region: env.AMAZON_COGNITO_REGION,

      // OPTIONAL - Amazon Cognito Federated Identity Pool Region
      // Required only if it's different from Amazon Cognito Region
      identityPoolRegion: env.IDENTITY_POOL_REGION,

      // OPTIONAL - Amazon Cognito User Pool ID
      userPoolId: env.COGNITO_USER_POOL_ID,

      // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
      userPoolWebClientId: env.COGNITO_CLIENT_ID,

      // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
      mandatorySignIn: false,

      // OPTIONAL - This is used when autoSignIn is enabled for Auth.signUp
      // 'code' is used for Auth.confirmSignUp, 'link' is used for email link verification
      signUpVerificationMethod: 'code', // 'code' | 'link'
      cookieStorage: {
        path: "/",
        // expires: 1,
        sameSite: "lax",
        secure: true,
        domain: ".example.com",
      },
  }
});
