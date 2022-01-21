import React, { createContext } from 'react'
import { User } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'

import { auth } from '../firebase/config'

type AuthContextType = User | null | undefined

export const AuthContext = createContext<AuthContextType>(null)

export const AuthProvider: React.FC = ({ children }): JSX.Element => {
  const [user] = useAuthState(auth)

  return (
    <AuthContext.Provider value={user}>
      { children }
    </AuthContext.Provider>
  )
}
