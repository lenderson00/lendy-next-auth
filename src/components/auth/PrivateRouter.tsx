import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from '../../firebase/config'

export default function PrivateRoute ({ protectedRoutes, children }: any): JSX.Element {
  const router = useRouter()
  const [user, isLoading] = useAuthState(auth)

  const pathIsProtected = protectedRoutes.indexOf(router.pathname) !== -1

  useEffect(() => {
    if (!isLoading && (user === null) && pathIsProtected) {
      void router.push('/login')
    }
  }, [isLoading, user, pathIsProtected, router])

  if ((isLoading || (user === null)) && pathIsProtected) {
    return <> Loading </>
  }

  return children
}
