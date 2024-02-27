import { useState } from "react";
import "./App.css";
import { TodoProvider } from "./contexts/TodoContext";

function App() {

  const [Todos , setTodos ] = useState([]);

  const addtodo = (todo)=> {
    setTodos(()=> {
      
    })

  }
  return (
    <TodoProvider value={{todos,addtodo,toggeleCompleted,deleteTodo,updatedTod}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-3xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
