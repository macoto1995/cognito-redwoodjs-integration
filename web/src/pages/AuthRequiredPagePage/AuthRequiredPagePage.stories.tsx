import type { ComponentMeta } from '@storybook/react'

import AuthRequiredPagePage from './AuthRequiredPagePage'

export const generated = () => {
  return <AuthRequiredPagePage />
}

export default {
  title: 'Pages/AuthRequiredPagePage',
  component: AuthRequiredPagePage,
} as ComponentMeta<typeof AuthRequiredPagePage>
