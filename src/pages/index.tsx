import { NextPage } from 'next/types'
import { singOut } from '../firebase/auth'
import { toast } from 'react-hot-toast'

const Home: NextPage = () => {
  return (
  <>
    DashBoard
    <button onClick={async () => { void singOut(); toast.success('Deslogado') }}> DesLogar </button>
  </>
  )
}

export default Home
