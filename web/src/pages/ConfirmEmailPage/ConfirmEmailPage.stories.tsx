import type { ComponentMeta } from '@storybook/react'

import ConfirmEmailPage from './ConfirmEmailPage'

export const generated = () => {
  return <ConfirmEmailPage />
}

export default {
  title: 'Pages/ConfirmEmailPage',
  component: ConfirmEmailPage,
} as ComponentMeta<typeof ConfirmEmailPage>
