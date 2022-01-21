import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'

import { singIn } from '../../firebase/auth'
import { auth } from '../../firebase/config'

const Login: NextPage = () => {
  const { handleSubmit } = useForm()
  const [user, isLoading] = useAuthState(auth)
  const router = useRouter()

  useEffect(() => {
    if (!isLoading && (user !== null)) {
      void router.push('/')
    }
  }, [user, router, isLoading])

  const onSubmit = async (data: any): Promise<void> => {
    const input = {
      email: 'a@a.com',
      password: '123456'
    }
    await singIn(input)
    toast.success('Login complete!')
  }

  return (
    <>
    <button onClick={handleSubmit(onSubmit)}> Logar </button>
    </>
  )
}

export default Login
