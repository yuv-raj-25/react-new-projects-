import { CreateSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id:1, text: "hello world"}],

}

export const todoSlice = CreateSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action  ) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo : (state , action )=> {
            state.todos = state.todos.filter((todo)=> todo.
            id !== action.payload)
        },
        updateTodo: (ts)=>{

        }
    }
})
