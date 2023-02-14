import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const SignupPage = () => {
  const { signUp } = useAuth()
  return (
    <>
      <MetaTags title="Signup" description="Signup page" />

      <h1>SignupPage</h1>
      <p>
        Find me in <code>./web/src/pages/SignupPage/SignupPage.tsx</code>
      </p>
      <p>
        My default route is named <code>signup</code>, link to me with `
        <Link to={routes.signup()}>Signup</Link>`
      </p>
      <button onClick={() => signUp({ email: 'email@example.com', password: 'p@ssw0rd'})}>Sign Up</button>


    </>
  )
}

export default SignupPage
