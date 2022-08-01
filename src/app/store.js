import { configureStore } from "@reduxjs/toolkit";
import todoAppReducer from "../features/todoAppSlice";
import pathReducer from "../features/pathSlice";

export default configureStore({
    reducer: {
        todoApp:todoAppReducer,
        path:pathReducer,
    }
})
