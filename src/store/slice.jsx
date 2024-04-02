import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    { id: 1, text: "Create a react app", completed: false },
    { id: 2, text: "Create a redux app", completed: false },
    { id: 3, text: "Create a redux toolkit app", completed: false },
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
      console.log("action:", action);
    },
    // this is where I can  add other functions
    toggleStatus: (state, action) => {
      state.todos = state.todos.map((todo) => {
        if (todo.id === action.payload.id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
      console.log(state.todos);
    },
    // updateTodo: (state, action) => {
    //   state.todos.forEach((todo) => {
    //     if (todo.id === action.payload.id) {
    //     }
    //   });
    // },
  },
});

export const { addToTodos, toggleStatus, removeTodo } = todoSlice.actions;
export default todoSlice.reducer;
