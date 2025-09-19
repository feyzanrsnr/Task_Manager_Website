import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Moon, Sun} from 'lucide-react'
import { toggleTheme } from '../../redux/themeSlice'
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
    <div className='p-0 m-0 flex md:flex-row relative bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text'>

      <Sidebar/>
      <div className='flex flex-1 flex-col'>
      <Main/> 
      </div>
       
      
      <button className='fixed bottom-0 right-0'
        onClick={() => dispatch(toggleTheme())}>
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