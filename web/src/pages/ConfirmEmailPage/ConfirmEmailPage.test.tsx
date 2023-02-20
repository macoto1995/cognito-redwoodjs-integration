import { render } from '@redwoodjs/testing/web'

import ConfirmEmailPage from './ConfirmEmailPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ConfirmEmailPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConfirmEmailPage />)
    }).not.toThrow()
  })
})
