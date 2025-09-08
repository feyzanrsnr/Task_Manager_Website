import { Trash2 as Trash, CalendarCheck, FlagTriangleRight as Flag, Edit } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { deleteTaskAndPersist, updateTaskStatusAndPersist } from '../redux/tasksSlice';

const TaskCard = ({id, title, description, startDate, endDate, status = "not_completed"}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    // Tarihi yyyy-mm-dd → dd-mm-yyyy çevirme
    const formatDate = (dateString) => {
    if (!dateString) return '';
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };


    const calculateTaskDateStatus = (startDate, endDate) => {
    const today = new Date();
    const start = new Date(startDate)
    const end = new Date(endDate)

    const isToday = (date) => {
      const d = new Date(date)
      return (
        d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth() &&
        d.getDate() === today.getDate()
      )
    }

    if (isToday(start) && isToday(end)) return { text: "Today", color: "bg-aqua" };
    else if(today < start) {
      const diffTime = start.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return { text: `${diffDays} days until it starts`, color: "bg-sunrise" }
    } else if(today > end) return {text:"Expired", color:"bg-mist"}
    else {
      const diffTime = end.getTime() - today.getTime()
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
      return { text: `${diffDays} days left`, color: "bg-amethyst" }
    }
  }

  const taskDateStatus = calculateTaskDateStatus(startDate,endDate);

  // card içerik stilleri
  const cardClasses = `bg-gradient-to-br from-blue-500/50 to-blue-400/50 backdrop-blur-md dark:bg-gradient-to-br dark:from-midnight/50 dark:to-deepsea/50 dark:backdrop-blur-md rounded-2xl p-4 w-80 h-[200px] max-h-[300px] text-white shadow-lg hover:transition-all hover:translate-y-2 cursor-pointer `;

   const handleStatusClick = () => {
    dispatch(updateTaskStatusAndPersist(id));
  };

  const getStatusStyle = () => {
    switch (status) {
      case "in_progress":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-red-500";
    }
  };



  return (
    <div>
      <div className={cardClasses} 
      onClick={handleStatusClick}
      >
        
        {taskDateStatus && (
          <span 
            className={`px-3 py-1 text-sm font-bold ${taskDateStatus.color} rounded-full text-white absolute top-2 right-2`}>
            {taskDateStatus.text}
          </span>
        )}

        <div>
          <h3 className="text-xl font-bold mb-2 mt-4">{title}</h3>
          <div className='flex gap-1'>
            <CalendarCheck className='text-blue-200'/>
            <span className="text-md text-blue-200 mb-2">{formatDate(endDate)}</span>
          </div>
          <span className='text-base'>{description}</span>
        </div>

        {/* Status etiketi */}
        <span
          className={`absolute bottom-2 left-2 px-3 py-1 text-xs font-semibold rounded-full ${getStatusStyle()}`}
        >
          {(status || "not_completed").replace("_", " ")}
        </span>

        
        <button onClick={(e) => {
          e.stopPropagation()
          dispatch(deleteTaskAndPersist(id))
        }}> 
          <Trash className='absolute right-2 bottom-2 pointer-events-auto hover:text-midnight
           dark:hover:text-white'/>
        </button>

        <button onClick={(e) => {
           e.stopPropagation()
          navigate(`/tasks/edit/${id}`)}}> 
          <Edit size={20} className='absolute right-9 bottom-2 pointer-events-auto hover:text-midnight
           dark:hover:text-white'/>
        </button>
       
        
      </div>
    </div>
  )
}

export default TaskCard;

