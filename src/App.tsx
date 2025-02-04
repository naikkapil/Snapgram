import './globals.css'
import { Routes,Route } from 'react-router-dom'
import SigninForm from './_auth/forms/SigninForm'
import { Home } from './_root/pages'
import SignupForm from './_auth/forms/SignupForm'
import AuthLayout from './_auth/AuthLayout'
import RootLayout from './_root/RootLayout'

const App = () => {
  return (
    <main className='flex h-screen'>
      {/*Public Routes*/}
      <Routes>
        <Route element={<AuthLayout />}>
            <Route path='/sign-up' element={<SignupForm/>} />
            <Route path='/sign-in' element={<SigninForm/>} />
        </Route>
        {/*Private Routes*/}
        <Route element={<RootLayout/>}>
            <Route index element={<Home/>} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
