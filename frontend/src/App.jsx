import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/auth/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/pages/Jobs'



const App = () => {
   const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/login',
      element: <Login/>
    },
    {
      path: '/signup',
      element: <Signup/>
    },
    {
      path: '/jobs',
      element: <Jobs/>
    }
   ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default App
