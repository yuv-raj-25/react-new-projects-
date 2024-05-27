import { CreateSlice ,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todosa: [{id:1, text: "hello world"}],

}

export const todoSlice = CreateSlice({
    name: "todo",
    initialState,
    const initialState = {}
    
    export default (state = initialState, { type, payload }) => {
      switch (type) {
    
      case first:
        return { ...state, ...payload }
    
      default:
        return state
      }
    }
    
})
