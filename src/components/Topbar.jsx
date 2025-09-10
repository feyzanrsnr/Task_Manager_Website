import { Menu, X } from 'lucide-react'
import img from '../assets/avatar.jpeg'
import { navigationItems } from '../constants/navigationItems'
import { useState } from 'react'
import { NavLink } from 'react-router'


function Topbar() {

  const [isOpen, setIsOpen] = useState(false)

  return (
     <div className='flex shadow-[0_4px_4px_-2px_rgba(209,213,219,1)] dark:shadow-[0_2px_4px_-2px_rgba(255,255,255,1)] h-[80px]'>
      <div className='flex gap-3 items-center ml-auto mr-3'>
        <span>feyzanur</span>
        <img src={img} className='w-[40px] h-[40px] rounded-full' />
        <button className='md:hidden' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
            <div className="md:hidden">
            <div className="flex flex-col w-full px-2 bg-white absolute right-0 top-20">
              {
                navigationItems.map(item => (
                <NavLink key={item.id} to={item.href}>
                <p className='text-lg py-3 px-2 hover:bg-deepsea/10'>{item.title}</p>
                </NavLink>
          
        ))
      }
            </div>
          </div>
        )}

    </div>
  )
}

export default Topbar