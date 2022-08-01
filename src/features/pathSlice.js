import { createSlice } from "@reduxjs/toolkit";

export const pathSlice = createSlice({
    name: 'path',
    initialState: {
        url: [],
        pathname:''
    },
    reducers: {
        changeUrl: (state, action) => {
            state.url.push(action.payload)
        },
        changePathname: (state, action) => {
            state.pathname = action.payload
        }
    }
})

export const { changeUrl, changePathname } = pathSlice.actions

export default pathSlice.reducer
