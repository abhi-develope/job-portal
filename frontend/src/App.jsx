import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/auth/Home'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Jobs from './components/pages/Jobs'
import Profile from './components/pages/Profile'
import Jobdescription from './components/pages/Jobdescription'
import Browse from './components/pages/Browse'
import Company from './components/admin/Company'



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
      path: '/browse',
      element: <Browse/>
    },
    {
      path: '/jobs',
      element: <Jobs/>
    },
    {
      path: '/profile',
      element: <Profile/>
    },
    {
      path: '/description/:id',
      element: <Jobdescription/>
    },

    // admin paths
    {
      path: '/admin/getCompany',
      element: <Company/>
    },
   ])
  return (
    <div>
      <RouterProvider router={appRouter}/>
      
    </div>
  )
}

export default App
