import { Menu, X } from 'lucide-react'
import img from '../assets/avatar.jpeg'
import { navigationItems } from '../constants/navigationItems'
import { useState } from 'react'
import { NavLink } from 'react-router'


function Topbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
     <div className='flex shadow-[0_4px_4px_-2px_rgba(209,213,219,1)] dark:shadow-[0_2px_4px_-2px_rgba(255,255,255,1)] h-20'>
      <div className='flex gap-3 items-center ml-auto mr-3'>
        <span>feyzanur</span>
        <img src={img} className='w-[40px] h-[40px] rounded-full' />
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
  <div className="md:hidden">
    <div
      className="
        fixed top-0 right-0 h-full w-2/3 
        bg-white dark:bg-gray-900 
        shadow-lg z-50 
        flex flex-col 
        animate-slideIn
      "
    >
      <div className="flex justify-end p-4">
        <button onClick={() => setIsOpen(false)}>
          <X size={28} />
        </button>
      </div>
      <nav className="flex flex-col px-4">
        {navigationItems.map(item => (
          <NavLink
            key={item.id}
            to={item.href}
            className="text-lg py-3 px-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            onClick={() => setIsOpen(false)}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>
    </div>
  </div>
)}
    </div>
  )
}

export default Topbar