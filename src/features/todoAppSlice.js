import { createSlice } from "@reduxjs/toolkit";

export const todoAppSlice = createSlice({
    name:'todoApp',
    initialState:{
        list:[
            {title:'Learn JS', completed:false},
            {title:'Learn React', completed:false},
            {title:'Take painkiller', completed:false}      
        ],
        searchValue:'',
        num:0
    },
    reducers: {
        addTodo:(state,action) => {
            state.list.unshift({
                title:action.payload,
                completed:false
            })
        },
        deleteTodo:(state,action) => {
            if (state.list[action.payload].completed) {
                state.list.splice(action.payload,1)
                state.num -= 1
            } else {
                state.list.splice(action.payload,1)
            }
        },
        editTodo: (state,action) => {
            state.list[action.payload.itemIndex].title = action.payload.result
        },
        searchTodo:(state,action) => {
            state.searchValue = action.payload
        },
        clearCompleted: (state) => {
            let i = 0;
            while(i < state.list.length) {
                if (state.list[i].completed) {
                    state.list.splice(i,1);
                    i = 0;
                    continue
                }
                i++
            }
            state.num = 0
        },
        isChecked:(state,action) => {
            state.list[action.payload[0]].completed = action.payload[1]
            if (state.list[action.payload[0]].completed) {
                state.num += 1
            } else {
                state.num -= 1
            }
        }
    }    
})

export function searchSystem(state) {
    if (!state.todoApp.searchValue) {
        return state.todoApp.list;
    }

    return state.todoApp.list.filter((item) => item.title.toLowerCase().search(state.todoApp.searchValue.toLowerCase()) !== -1);
}


export const { addTodo, deleteTodo, editTodo, searchTodo, clearCompleted,isChecked} = todoAppSlice.actions

export const initialTodo = state => state.todoApp.list
export const number = state => state.todoApp.num

export default todoAppSlice.reducer
