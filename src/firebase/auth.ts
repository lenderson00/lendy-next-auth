import { auth } from './config'
import { signInWithEmailAndPassword, User, signOut } from 'firebase/auth'
import { LKSignInError } from '../domain/error/LKSignInError'

type Input = {
  email: string
  password: string
}

type Output = User | LKSignInError

export const singIn = async (input: Input): Promise<Output> => {
  try {
    const userCredentials = await signInWithEmailAndPassword(auth, input.email, input.password)
    return userCredentials.user
  } catch (err) {
    return new LKSignInError()
  }
}
export const singOut = async (): Promise<void> => {
  await signOut(auth)
}
