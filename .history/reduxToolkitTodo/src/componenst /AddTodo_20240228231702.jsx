import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../features/todo/TodoSlice'

function AddTodo() {
  const todos  =   useSelector(state => state.todos )
  const dispatch = useDispatch()
  return (
    <>
    <div>Todos</div>
    {}
    </>
  )
}

export default AddTodo