import { Github, Linkedin, Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router'
import { useDispatch,useSelector } from 'react-redux'
import { toggleTheme } from '../../redux/themeSlice'

const AuthLayout = () => {

  const dispatch = useDispatch()

  //redux'taki theme state'ini çekiyoruz
  const theme = useSelector((state) => state.theme.theme)

  useEffect(() => {
    if(theme === "dark"){
      document.documentElement.classList.add("dark")
    }
    else{
      document.documentElement.classList.remove("dark")
    }
  }, [theme])
  
  return (
    <div className='h-screen p-3 m-0 relative bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text'>
      <div className='flex items-center justify-between'>
        <h1 className='text-4xl'>Taskly</h1>
        <button onClick={() => dispatch(toggleTheme())}>
          { theme === "dark" ? (
                <Sun className='cursor-pointer' />
              ) : (
                <Moon className='cursor-pointer' />
              )
          }
        </button>
      </div>
      <div className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[50%] h-[70%] bg-white rounded-md text-light-text'>
        <Outlet />
      </div>
      <footer className='flex absolute bottom-3 gap-2 cursor-pointer'>
        <Github/>
        <Linkedin/>
      </footer>

    </div>
  )
}

export default AuthLayout