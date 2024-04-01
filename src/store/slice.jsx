import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Create a react app", status: "incomplete" },
    { id: 2, text: "Create a redux app", status: "incomplete" },
    { id: 3, text: "Create a redux toolkit app", status: "incomplete" },
  ],
  appTitle: "Todo's",
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addToTodos: (state, action) => {
      const newTodo = action.payload;
      state.todos.push(newTodo);
    },
    // this is where I can  add other functions
    toggleStatus: (state, action) => {
      const id = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo.status === "incomplete") {
        existingTodo.status = "complete";
      } else {
        existingTodo.status = "incomplete";
      }
    },
  },
});

export const { addToTodos, toggleStatus } = todoSlice.actions;
export default todoSlice.reducer;
