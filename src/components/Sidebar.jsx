import { NavLink } from "react-router"
import { navigationItems } from "../constants/navigationItems"
import { ArrowBigRight, ChevronLeft, ChevronRight, ChevronRightCircle } from "lucide-react"
import { useState } from "react"

function Sidebar() {

  const [isOpen, setIsOpen] = useState(false)

  //relative flex flex-col flex-shrink-0 items-center gap-16 w-14 md:w-52 bg-[#323232] text-white rounded-br-3xl rounded-tr-3xl

  /*fixed top-0 left-0 h-full z-50 flex flex-col flex-shrink-0 items-center
        gap-16 bg-[#323232] text-white 
        rounded-br-3xl rounded-tr-3xl
        transition-all duration-300 ease-in-out
        ${isOpen ? "w-52 md:w-52" : "w-14 md:w-52"}
  */

  return (
    <nav className={`
        
        ${isOpen ? "relative flex flex-col flex-shrink-0 items-center gap-16 w-14 md:w-52 bg-[#323232] text-white rounded-br-3xl rounded-tr-3xl" : "w-14 md:w-52"}
    `}>

          {/* <button className="md:invisible absolute top-16 left-[45px] bg-white rounded-full">
            <ChevronRight color="black"/>
          </button> */}

            {
              isOpen
              ? <button onClick={() => setIsOpen(!isOpen)} className="d:hidden md:hidden absolute top-20 left-12 bg-white rounded-full">
            <ChevronLeft color="black" width={20} height={20}/>
          </button>
              :<button onClick={() => setIsOpen(!isOpen)} className="d:hidden md:hidden absolute top-4 left-0 bg-white rounded-full p-2">
            <ChevronRight color="black"/>
          </button>
            }

          {/* <h1 className='text-xl md:text-5xl px-16 py-4'>Taskly.</h1> */}

          <h1 className={`text-lg md:text-5xl px-4 md:px-16 py-4 ${!isOpen && "hidden md:block"}`}>
            Taskly.
          </h1>

        <div className="flex flex-col gap-10">
        {navigationItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.href}
            className={({ isActive }) =>
              `flex items-center px-3 md:gap-4 ${isActive ? "border-l-8 border-white rounded-md" : ""}`
            }
          >
            <span className={`${!isOpen && "hidden md:block"}`}>{item.icon}</span>
            <span className={`hidden md:inline-block md:text-2xl ${!isOpen && "hidden md:block"}`}>
              {item.title}
            </span>
          </NavLink>
        ))}
      </div>
        
          {/* <div className="flex flex-col gap-10">
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
          </div> */}
        
    </nav>
  )
}

export default Sidebar