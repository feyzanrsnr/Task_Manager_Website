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
    <div className='relative flex min-h-screen dark:bg-dark-background text-light-text bg-light-background dark:text-dark-text'>
      
        <Sidebar/>
        <Main/>  
      
      
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