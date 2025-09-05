import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout/MainLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import LoginPage from '../pages/login-page/LoginPage'
import RegisterPage from '../pages/register-page/RegisterPage'

const route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[

        ]
        
    },
    {
        element:<AuthLayout/>,
        children:[
            {
                path:"login",
                element:<LoginPage/>
            },
            {
                path:"register",
                element:<RegisterPage/>
            }
        ]
    }
])

export default route