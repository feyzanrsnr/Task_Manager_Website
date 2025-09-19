import TaskCard from '../../components/TaskCard'
import EmptyTasks from './empty-task-page/EmptyTask'
import { Link } from 'react-router'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'


function TasksPage() {
  const theme = useSelector((state) => state.theme.theme)
  const tasks = useSelector((state) => state.tasks.tasks)
  
  return (
    <div className='min-h-screen relative p-4'>
      {
        tasks.length === 0 ? (
          <EmptyTasks/>
        ) :

        (
          <div className='flex flex-wrap gap-3 pb-16'>
              {tasks.map((task) => (
                  
                    <TaskCard 
                    key={task.id} {...task}
              /> 
              ))}

              
                <Link className='fixed bottom-3 left-116 md:left-56' to={"/tasks/create"}>
               <Button variant='primary' mode={theme === "dark" ? "dark" : "light"}>Create new task</Button>
              </Link>     
  
      </div>
        )
      }
      
    </div>
  )
}

export default TasksPage
