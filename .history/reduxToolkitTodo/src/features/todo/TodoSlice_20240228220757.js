import { CreateSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todosa: [{id:1, text: "hello world"}],

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
            state.todo.push()
        },
        removeTodo : ()=> {}
    }
})
