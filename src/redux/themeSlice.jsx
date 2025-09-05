import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    theme:'light'
}

export const themeSlice = createSlice({
    name:'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme === "light" ? "dark" : "light"
        },

        setTheme: (state,action) => {
            state.theme = action.payload
            //action.payload ile gelen değeri (light/dark) doğrudan theme değerine atıyor
        },

    }
})

export const {toggleTheme,setTheme} = themeSlice.actions
export default themeSlice.reducer