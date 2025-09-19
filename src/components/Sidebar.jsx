import { NavLink } from "react-router"
import { navigationItems } from "../constants/navigationItems"
import { ArrowBigRight, ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react"
import { useEffect, useState } from "react"

function Sidebar() {

 
  return (
    <nav className={`
        "relative flex flex-col flex-shrink-0 items-center gap-16 w-14 md:w-52 bg-[#323232] text-white
        rounded-br-3xl
        }
    `}>

          
      <h1 className='text-lg md:text-5xl px-16 py-4'>Taskly.</h1>

       <div className="flex flex-col gap-10">
            {
              navigationItems.map(item => (
                <NavLink 
                key={item.id} 
                to={item.href}
                className={({isActive}) => 
                      isActive
                      ? "border-l-8 border-white rounded-md"
                      : ""
                }
                >
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