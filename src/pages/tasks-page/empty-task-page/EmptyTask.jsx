import { useSelector } from 'react-redux'
import Button from '../../../components/Button'
import { Link } from 'react-router'

const EmptyTasks = () => {

  const theme = useSelector((state) => state.theme.theme)

  return (
   
      <div className='w-full flex flex-col items-center justify-center gap-3'>
        <span className='text-gray-400 text-2xl dark:text-gray-500'>There is no task created yet.</span>
        <span className='text-gray-800 dark:text-gray-400'>Click on the button below to create the first one</span>
        <Link to={"/tasks/create"}>
        <Button variant='primary' mode={theme === "dark" ? "dark" : "light"}>Create new task</Button>
        </Link>
      </div>
   
  )
}

export default EmptyTasks