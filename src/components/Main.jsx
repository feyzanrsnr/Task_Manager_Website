import React from 'react'
import { Outlet } from 'react-router'

function Main() {
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Outlet/> 
    </div>
  )
}

export default Main