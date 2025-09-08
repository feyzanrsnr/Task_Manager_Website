import TaskCard from '../../components/TaskCard'
import EmptyTasks from './empty-task-page/EmptyTask'
import { Link } from 'react-router'
import Button from '../../components/Button'
import { useSelector } from 'react-redux'


function TasksPage() {
  const theme = useSelector((state) => state.theme.theme)
  const tasks = useSelector(state => state.tasks.tasks)
  
  return (
    <div className='flex w-full h-full relative px-3 pt-5'>
      {
        tasks.length === 0 ? (
          <EmptyTasks/>
        ) :

        (
          <div className='flex flex-wrap gap-x-4'>
              {tasks.map((task) => (
                  <TaskCard 
                    key={task.id} 
                    id={task.id}
                    task={task}
                    title ={task.title}
                    description= {task.description}
                    startDate = {task.startDate}
                    endDate = {task.endDate}
              />   
              ))}

               <Link className='absolute bottom-3 left-3'  to={"/tasks/create"}>
               <Button variant='primary' mode={theme === "dark" ? "dark" : "light"}>Create new task</Button>
              </Link>     

      </div>

        )
      }
       

      
      
    </div>
  )
}

export default TasksPage