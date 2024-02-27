import { createContext , useContext } from "react";

export const  TodoContext = createContext({
    todos: [
        
    ]
})

export const useTodo = ()=> {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider;