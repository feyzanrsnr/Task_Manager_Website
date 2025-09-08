import { createSlice } from "@reduxjs/toolkit"

const savedTheme = localStorage.getItem("theme")

const initialState = {
    theme:savedTheme ? savedTheme : 'light'
}


export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
            localStorage.setItem("theme", state.theme) //değişiklik olursa kaydet
        },

        setTheme: (state,action) => {
            state.theme = action.payload
            //action.payload ile gelen değeri (light/dark) doğrudan theme değerine atıyor
            localStorage.setItem("theme", state.theme) //değişiklik olursa kaydet
        },

    }
})

export const {toggleTheme,setTheme} = themeSlice.actions;
export default themeSlice.reducer;