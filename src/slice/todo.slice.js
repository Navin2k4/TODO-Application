import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialSlice,
  reducers: {
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },
    updateToDo: (state, action) => {
      const { index, updatedData } = action.payload;
      state.todos[index] = {
        ...state.todos[index],
        ...updatedData,
      };
    },
  },
});

export const { addTodo, deleteTodo, updateToDo } = todoSlice.actions;

export default todoSlice.reducer;
