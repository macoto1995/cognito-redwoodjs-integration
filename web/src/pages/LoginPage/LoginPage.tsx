import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const LoginPage = () => {
  const { logIn } = useAuth()
  return (
    <>
      <MetaTags title="Login" description="Login page" />

      <h1>LoginPage</h1>
      <p>
        Find me in <code>./web/src/pages/LoginPage/LoginPage.tsx</code>
      </p>
      <p>
        My default route is named <code>login</code>, link to me with `
        <Link to={routes.login()}>Login</Link>`
      </p>
      <button onClick={() => logIn({ email: 'email.example.com', password: 'P@ssw0rd'})}>Login</button>
    </>
  )
}

export default LoginPage
