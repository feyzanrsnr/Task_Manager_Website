import React from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import img from '../../assets/img.png'
import { Link } from 'react-router'
import { useSelector } from 'react-redux'

const RegisterPage = () => {

  const theme = useSelector((state) => state.theme.theme)
  return (
    <div className='flex h-[100%]'>

      <div className='flex flex-col flex-1 items-center justify-center'>

        <span className='text-3xl mb-4'>Create an Account</span>

        <div className=' flex flex-col items-center justify-center gap-8'>
            <div className=' flex flex-col gap-4'>

              <div className='flex flex-col gap-2'>
              <span>Email</span>
              <Input type={'email'} placeholder={'email'} />
              </div>

              <div className='flex flex-col gap-2'>
              <span>Username</span>
              <Input type={'text'} placeholder={'username'} />
              </div>

              <div className='flex flex-col gap-2'>
              <span>Password</span>
              <Input type={'password'} placeholder={'password'} />
              </div>
            
          </div>

            <Button variant='outline' mode={theme === "dark" ? "dark" : "light"} size='full'>Signup</Button>

            <span>Already have an account? <Link to="/login" className='font-semibold text-amethyst underline'>Login</Link></span>

        </div>
      </div>

      <div className='hidden md:flex flex-1 rounded-tr-md rounded-br-md overflow-hidden dark:bg-dark-background'>
        <img src={img} className='w-full h-[full] object-cover rounded-tr-md rounded-br-md'/>
      </div>
     
    </div>
  )
}

export default RegisterPage