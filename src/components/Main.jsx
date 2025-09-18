
import { Outlet } from 'react-router'

function Main() {

  return (
    <div className='min-h-screen w-full flex items-center justify-center pb-20'>
      <Outlet/> 
    </div>
  )
}

export default Main