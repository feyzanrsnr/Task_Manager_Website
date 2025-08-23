import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout/MainLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'

const route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        
    },
    {
        element:<AuthLayout/>
    }
])

export default route