import { Trash2 as Trash, CalendarCheck, Leaf, TreeDeciduous, Bean, Edit, Edit2, Edit2Icon, Edit3, FileEdit, LucideEdit, FolderEdit, LocationEdit, ClipboardEdit } from 'lucide-react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router'
import { deleteTaskAndPersist, updateTaskStatusAndPersistCustom } from '../redux/tasksSlice';

const TaskCard = ({id, title, description, startDate, endDate, status = "not_completed"}) => {

    const dispatch = useDispatch()
    const navigate = useNavigate();

    // Tarihi yyyy-mm-dd → dd-mm-yyyy çevirme
    const formatDate = (dateString) => {
    if (!dateString) return 'unspecified';
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  };


    const calculateTaskDateStatus = (startDate, endDate) => {
      if(!startDate || !endDate){
        return {text:"unspecified", color: "bg-gray-400"}
      }
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
  const cardClasses = `bg-gradient-to-br from-blue-400 to-blue-300 backdrop-blur-md dark:bg-gradient-to-br dark:from-blue-700 dark:to-blue-500  rounded-2xl p-4 w-80 h-[200px] max-h-[300px] text-white shadow-lg hover:transition-all hover:translate-y-2 cursor-pointer `;

  const getStatusIcon = () => {
    switch (status) {
      case "in_progress":
        return <Leaf size={20}/>;
      case "completed":
        return <TreeDeciduous size={20}/>;
      default:
        return <Bean size={20}/>;
    }
  };

  // status değişikliği
  const statuses = ["not_completed", "in_progress", "completed"];

  const handleClick = () => {
    const currentIndex = statuses.indexOf(status);
    if (currentIndex === -1) return; // güvenlik önlemi

    const newIndex = (currentIndex + 1) % statuses.length;
    const newStatus = statuses[newIndex];

  dispatch(updateTaskStatusAndPersistCustom(id, newStatus));
  };


  return (
    <div>
      <div className={cardClasses} 
      onClick={handleClick}
      >
        
        {taskDateStatus && (
          <span 
            className={`px-3 py-1 text-sm font-bold ${taskDateStatus.color} rounded-xl text-white absolute top-2 right-2`}>
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
        
        <div className='flex gap-1 items-center absolute bottom-2 left-2 bg-green-50 text-green-500 text-sm font-mono px-1 py-1 rounded-md'>
          {getStatusIcon()}
          {(status || "not_completed").replace("_", " ")}
        </div>

        
        <button onClick={(e) => {
          e.stopPropagation()
          dispatch(deleteTaskAndPersist(id))
        }}> 
          <Trash className='absolute right-2 bottom-2 pointer-events-auto hover:text-red-400'/>
        </button>

        <button onClick={() => {
          {navigate(`/tasks/edit/${id}`)}
        }}> 
          <ClipboardEdit className='absolute right-9 bottom-2 pointer-events-auto hover:text-green-400'/>
        </button>
        
      </div>
    </div>
  )
}

export default TaskCard;

