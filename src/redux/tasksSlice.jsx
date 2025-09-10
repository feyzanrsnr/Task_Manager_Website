import { createSlice } from "@reduxjs/toolkit";

const TASKS_STORAGE_KEY = "tasks"

const initialState = {
    //başlangıçta localStorage'den yükle, yoksa boş dizi
    tasks: JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY)) || []
}

export const tasksSlice = createSlice({
    name:'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ ...action.payload, status: "not_completed" });
        },
        deleteTask: (state,action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateTask: (state, action) => {
        const { id, title, description, startDate, endDate } = action.payload;
        const index = state.tasks.findIndex((t) => t.id === id);
        if (index !== -1) {
            state.tasks[index] = {
            ...state.tasks[index], // mevcut status dahil tüm alanları koru
            title,
            description,
            startDate,
            endDate
            };
        }
        },
        updateTaskStatus: (state, action) => {
        const { id, newStatus } = action.payload;
        const task = state.tasks.find(t => t.id === id);
        if (task) {
            task.status = newStatus || (() => {
            if (task.status === "not_completed") return "in_progress";
            if (task.status === "in_progress") return "completed";
            return "not_completed";
            })();
        }
        },
    }
})

export const {addTask, deleteTask,updateTask, updateTaskStatus } = tasksSlice.actions


//Thunk: ekleme + localStorage'a kaydetme

export const addTaskAndPersist = (task) => (dispatch, getState) => {
    dispatch(addTask(task))
    const {tasks} = getState().tasks
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
}

//Thunk: silme + localStorage'a kaydetme

export const deleteTaskAndPersist = (taskId) => (dispatch, getState) => {
    dispatch(deleteTask(taskId))
    const {tasks} = getState().tasks
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
}

// Thunk: update + localStorage
export const updateTaskAndPersist = (task) => (dispatch, getState) => {
  dispatch(updateTask(task))
  const { tasks } = getState().tasks
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks))
}

// Thunk: status update + localStorage
export const updateTaskStatusAndPersist = (id) => (dispatch, getState) => {
  dispatch(updateTaskStatus({ id }));
  const { tasks } = getState().tasks;
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};

// Thunk: scroll
export const updateTaskStatusAndPersistCustom = (id, newStatus) => (dispatch, getState) => {
  const { tasks } = getState().tasks;
  const index = tasks.findIndex(t => t.id === id);
  if (index !== -1) {
    // Redux state'i doğru şekilde dispatch ile değiştir
    dispatch(updateTaskStatus({ id, newStatus }));
    localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(getState().tasks.tasks));
  }
};


// Selector
export const selectTaskStatsByRange = (state, dateRange) => {
  const tasks = state.tasks.tasks;
  const now = new Date();

  const filteredTasks = tasks.filter((task) => {
    if (!task.startDate) return false;
    const taskDate = new Date(task.startDate);

    if (dateRange === "day") {
      return (
        taskDate.getDate() === now.getDate() &&
        taskDate.getMonth() === now.getMonth() &&
        taskDate.getFullYear() === now.getFullYear()
      );
    }

    if (dateRange === "week") {
      const startOfWeek = new Date(now);
      startOfWeek.setDate(now.getDate() - now.getDay());
      const endOfWeek = new Date(startOfWeek);
      endOfWeek.setDate(startOfWeek.getDate() + 6);
      return taskDate >= startOfWeek && taskDate <= endOfWeek;
    }

    if (dateRange === "month") {
      return (
        taskDate.getMonth() === now.getMonth() &&
        taskDate.getFullYear() === now.getFullYear()
      );
    }

    return true;
  });

  const completed = filteredTasks.filter((t) => t.status === "completed").length;
  const total = filteredTasks.length;
  const percentage = total ? Math.round((completed / total) * 100) : 0;

  return { completed, total, percentage };
};



export default tasksSlice.reducer

