import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Moon, Sun } from 'lucide-react'
import { toggleTheme } from '../../redux/themeSlice'
import Topbar from '../../components/Topbar'
import Sidebar from '../../components/Sidebar'
import Main from '../../components/Main'



const MainLayout = () => {

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
    <div className='h-screen p-0 m-0 flex md:flex-row bg-light-background text-light-text dark:bg-dark-background dark:text-dark-text relative'>

      <Sidebar/>
      <div className='flex flex-1 flex-col'>
      <Topbar/>
      <Main/> 
      </div>
       
      
      <button onClick={() => dispatch(toggleTheme())}>
          { theme === "dark" ? (
                <Sun className='fixed md:absolute bottom-3 right-3 cursor-pointer' />
              ) : (
                <Moon className='fixed md:absolute bottom-3 right-3 cursor-pointer' />
              )
          }
      </button>
    </div>
  )
}

export default MainLayout