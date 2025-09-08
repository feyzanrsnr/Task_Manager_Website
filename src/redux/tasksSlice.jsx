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
        const { id } = action.payload;
        const task = state.tasks.find((t) => t.id === id);
        if (task) {
            // Status döngüsü: not_completed → in_progress → completed
            if (task.status === "not_completed") task.status = "in_progress";
            else if (task.status === "in_progress")  task.status = "completed";
            else task.status = "not_completed"; // tekrar başa dön
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

export default tasksSlice.reducer

