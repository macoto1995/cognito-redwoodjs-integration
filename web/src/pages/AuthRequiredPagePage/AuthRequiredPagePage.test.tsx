import { render } from '@redwoodjs/testing/web'

import AuthRequiredPagePage from './AuthRequiredPagePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('AuthRequiredPagePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AuthRequiredPagePage />)
    }).not.toThrow()
  })
})
