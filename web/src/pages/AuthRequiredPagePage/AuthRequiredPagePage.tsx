import { Link, navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useAuth } from 'src/auth'

const AuthRequiredPagePage = () => {
  const { logOut, currentUser } = useAuth()
  return (
    <>
      <MetaTags title="AuthRequiredPage" description="AuthRequiredPage page" />

      <h1>AuthRequiredPagePage</h1>
      <p>
        User is logging in as
      </p>
      <p>
        {`currentUser: ${JSON.stringify(currentUser)}`}
      </p>

      <button onClick={() => {
        logOut().then(() => navigate(routes.login()))
      }}>
        Logout
      </button>
    </>
  )
}

export default AuthRequiredPagePage
