import { Lock, User2 } from 'lucide-react'
import Button from '../../components/Button'
import Input from '../../components/Input'
import img from '../../assets/img.jpeg'
import { Link } from 'react-router'
const LoginPage = () => {
  return (
    <div className='flex h-[100%]'>

      <div className='flex flex-1'>
        <img src={img}  className='w-full rounded-tl-md rounded-bl-md'/>
      </div>

      <div className='flex flex-1 items-center justify-center'>

        <div className=' flex flex-col items-center justify-center gap-8'>
            <span className='text-3xl mb-4'>Welcome back!</span>

            <div className=' flex flex-col gap-4'>

            <div className='flex flex-col gap-2'>
              <span>Username</span>
              <Input type={'text'} placeholder={'username'} />
            </div>

            <div className='flex flex-col gap-2'>
              <span>Password</span>
              <Input type={'password'} placeholder={'password'} />
              <span className='ml-1 text-xs cursor-pointer hover:underline'>Forgot your password?</span>
            </div>
            
            </div>

            <Button variant='outline' mode='light' size='full'>Login</Button>

             
            <span>Don't have an account?  <Link to="/register" className='font-semibold text-amethyst underline'>Register</Link></span>

        </div>
      </div>
     
    </div>
  )
}

export default LoginPage