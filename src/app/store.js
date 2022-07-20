import { configureStore } from "@reduxjs/toolkit";
import todoAppReducer from "../features/todoApp/todoAppSlice";

export default configureStore({
    reducer: {
        todoApp:todoAppReducer
    }
})