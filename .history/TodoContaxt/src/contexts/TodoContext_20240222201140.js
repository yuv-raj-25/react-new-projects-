import { createContext , useContext } from "react";

export const  TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "todo msg"
        }

    ],
})

export const useTodo = ()=> {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;