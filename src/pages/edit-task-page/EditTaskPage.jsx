import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'
import { ArrowLeft as Back } from 'lucide-react'
import Button from '../../components/Button'
import { useDispatch, useSelector } from 'react-redux'
import { updateTaskAndPersist } from '../../redux/tasksSlice'

const EditTaskPage = () => {

  const dispatch = useDispatch()
  const theme = useSelector((state) => state.theme.theme)
  const {id} = useParams()
  const navigate = useNavigate()

  const taskFromStore = useSelector((state) => 
    state.tasks.tasks.find((t) => String(t.id) === String(id))
  )

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  useEffect(() => {
    if (taskFromStore) {
      setTitle(taskFromStore.title);
      setDescription(taskFromStore.description);
      setStartDate(taskFromStore.startDate);
      setEndDate(taskFromStore.endDate);
    }
  }, [taskFromStore]);


   const handleSave = () => {
  dispatch(updateTaskAndPersist({ id: taskFromStore.id, title, description, startDate, endDate }));
  navigate("/tasks");
};
  

  return (
    <div className='w-full relative'>

    <div className="flex justify-center items-start py-10 bg-transparent dark:bg-transparent">
      <div className="w-[350px] md:w-full max-w-xl bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
        <h2 className="text-xl md:text-2xl font-bold mb-6 text-gray-800 dark:text-white">
          Edit Task
        </h2>

        <label className="flex flex-col md:block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            Title
          </span>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 md:mt-2 w-[200px] md:w-full p-2 md:p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex flex-col md:block mb-4">
          <span className="text-gray-700 dark:text-gray-300 font-semibold">
            Description
          </span>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 md:mt-2 w-[250px] md:w-full p-2 md:p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none h-32"
          />
        </label>

        <div className="flex gap-4 mb-6">
          <label className="flex-1">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              Start Date
            </span>
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-1 md:mt-2 w-[120px] md:w-full p-2 md:p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
          <label className="flex-1">
            <span className="text-gray-700 dark:text-gray-300 font-semibold">
              End Date
            </span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="mt-1 md:mt-2 w-[120px] md:w-full p-2 md:p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </label>
        </div>

        <div className="flex gap-4 justify-end">
          <Button variant="primary" size='full' mode={theme === "dark" ? "dark" : "light"} onClick={handleSave}> Save</Button>
          <Button variant="primary" size='full' mode={theme === "dark" ? "dark" : "light"} onClick={() => navigate("/tasks")}>Cancel</Button>
        </div>
      </div>
    </div>
    
    <Link to={'/tasks'}><Back className='absolute top-2 left-2 bg-darkBgStart text-darkText dark:bg-lightBgStart dark:text-lightText rounded-full w-[25px] h-[25px]'/></Link>
</div>
  )
}

export default EditTaskPage