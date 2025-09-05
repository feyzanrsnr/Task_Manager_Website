import React from 'react'

const Input = ({type,placeholder,value}) => {
  return (
    <input type={type} placeholder={placeholder} value={value} 
        className='text-light-text border border-light-textSecondary py-2 px-3 rounded-md w-[250px] outline-blue-500'
        />
  )
}

export default Input