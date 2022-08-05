import { createSlice } from "@reduxjs/toolkit";

export const pathSlice = createSlice({
    name: 'path',
    initialState: {
        url: [],
        pathname:'',
        home: [],
        about: []
    },
    reducers: {
        changeUrl: (state, action) => {
            state.url.push(action.payload);
        },
        changePathname: (state, action) => {
            state.pathname = action.payload;
        },
        changeHome: (state , action) => {
            state.home.push(action.payload);
        },
        changeAbout: (state, action) => {
            state.about.push(action.payload);
        }
    }
})

export const { changeUrl, changePathname, changeHome, changeAbout } = pathSlice.actions

export default pathSlice.reducer
