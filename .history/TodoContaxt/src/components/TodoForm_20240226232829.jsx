import React, { useState } from 'react'
import {useTodo} from "../contexts/TodoContext"


function TodoForm() {
    const [todo , setTodo] = useState("")
    const {addtodo} = useTodo

    const add = (e) => {
       e.preventDefault();

       if(!todo) return;

       addtodo({
           \
           msg: todo,
           completed: false
       })
    }

    return (
        <form  className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

