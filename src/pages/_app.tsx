import type { AppProps } from 'next/app'
import PrivateRoute from '../components/auth/PrivateRouter'
import { AuthProvider } from '../context/authContext'
import { Toaster } from 'react-hot-toast'
import { GlobalStyle } from '../components/styles/GlobalStyles'
function MyApp ({ Component, pageProps }: AppProps): JSX.Element {
  const protectedRoutes = ['/']

  return (
    <>
      <GlobalStyle />
      <Toaster
        position="bottom-center"
        reverseOrder={false}/>
      <AuthProvider>
        <PrivateRoute protectedRoutes={protectedRoutes}>
            <Component {...pageProps} />
        </PrivateRoute>
      </AuthProvider>
    </>

  )
}

export default MyApp
