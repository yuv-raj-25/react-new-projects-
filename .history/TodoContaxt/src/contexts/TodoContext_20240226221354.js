import { createContext , useContext } from "react";

export const  TodoContext = createContext({
    todo: [
        {
            id: 1,
            todo: "todo msg",
            completed: false,
        }

    ],
    addtodo: (todo) => {},
    updatedTod: (id, todo) => {},
    deleteTodo: (id) => {},
    toggeleCompleted: (id) => {}
})

export const useTodo = ()=> {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;