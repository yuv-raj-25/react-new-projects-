import React from 'react'
import { UseSelector, useDispatch, useSelector } from 'react-redux'
import {removeTodo} from '../features/todo/TodoSlice'

function AddTodo() {
  const select= =  useSelector(state)
  return (
    <div>AddTodo</div>
  )
}

export default AddTodo