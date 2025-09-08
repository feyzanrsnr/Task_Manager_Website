import { NavLink } from "react-router"
import { navigationItems } from "../constants/navigationItems"

function Sidebar() {
    

  return (
    <nav className='hidden md:flex flex-col border-r border-light-text dark:border-r dark:border-dark-text w-[15%] h-[100%]'>
          <h1 className='text-4xl px-16 py-4'>Taskly.</h1>
        
          <div className="flex flex-col flex-1 items-start px-1 py-8">
            {
              navigationItems.map(item => (
                <NavLink key={item.id} to={item.href} className='w-full'>
                <div className='flex px-4 py-5 items-center gap-3 hover:bg-deepsea/10 dark:hover:bg-gray-700 rounded-lg'>
                  <div>
                  {item.icon}
                  </div>
                <p className="text-2xl">{item.title}</p>
                </div>
                </NavLink>
                
              ))
          }
          </div>
        
    </nav>
  )
}

export default Sidebar