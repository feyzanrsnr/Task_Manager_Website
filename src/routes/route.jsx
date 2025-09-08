import { createBrowserRouter } from 'react-router'
import MainLayout from '../layouts/MainLayout/MainLayout'
import AuthLayout from '../layouts/AuthLayout/AuthLayout'
import LoginPage from '../pages/login-page/LoginPage'
import RegisterPage from '../pages/register-page/RegisterPage'
import HomePage from '../pages/home-page/HomePage'
import TasksPage from '../pages/tasks-page/TasksPage'
import CreateTaskPage from '../pages/create-task-page/CreateTaskPage'
import EditTaskPage from '../pages/edit-task-page/EditTaskPage'
import PomodoroPage from '../pages/pomodoro-page/PomodoroPage'
import SettingsPage  from '../pages/settings-page/SettingsPage'
import CalendarPage from '../pages/calendar-page/CalendarPage'

const route = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                index:true,
                element:<HomePage/>
            },
            {
                path:'tasks',
                element:<TasksPage/>
            },
            {
                path:'tasks/create',
                element:<CreateTaskPage/>
            },
            {
                path:'tasks/edit/:id',
                element:<EditTaskPage/>
            },
            {
                path:'pomodoro',
                element:<PomodoroPage/>
            },
            {
                path:'calendar',
                element:<CalendarPage/>
            },
            {
                path:'settings',
                element:<SettingsPage/>
            },

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