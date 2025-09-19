import { NavLink } from "react-router"
import { navigationItems } from "../constants/navigationItems"
import { ArrowBigRight, ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react"

function Sidebar() {
    

  return (
    <nav className='relative flex flex-col items-center gap-16 w-20 md:w-52 bg-gray-300 text-white rounded-br-3xl rounded-tr-3xl'>
{/* 
          <button className="md:invisible absolute top-16 left-[70px] bg-white rounded-full">
            <ChevronRight color="black"/>
          </button>

          <button className="invisible md:visible absolute top-16 left-[198px] bg-white rounded-full">
            <ChevronLeft color="black"/>
          </button> */}

          <h1 className='text-xl md:text-5xl px-16 py-4'>Taskly.</h1>
        
          <div className="flex flex-col gap-10">
            {
              navigationItems.map(item => (
                <NavLink key={item.id} to={item.href}>
                  <div className="flex px-3 md:gap-4 md:items-center">
                    <span>{item.icon}</span>
                    <span className="hidden md:inline-block md:text-2xl">{item.title}</span>
                  </div>
                </NavLink>
                
              ))
          }
          </div>
        
    </nav>
  )
}

export default Sidebar