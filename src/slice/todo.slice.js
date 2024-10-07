import { createSlice } from "@reduxjs/toolkit";

const initialSlice = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialSlice,
  reducers: {
    /**
     * Add a new todo item to the list.
     * @function addTodo
     * @param {Object} state - The current state of the todos array.
     * @param {Object} action - Contains the payload with new todo data.
     * @param {string} action.payload.taskName - The name of the task.
     * @param {string} action.payload.taskDescription - The description of the task.
     * @param {string} action.payload.taskPriority - The priority level of the task ('high', 'medium', 'low').
     * @param {string} action.payload.dueDate - The due date of the task.
     * @example
     * dispatch(addTodo({
     *   taskName: "Complete project report",
     *   taskDescription: "Finish writing the report by Monday",
     *   taskPriority: "high",
     *   dueDate: "2024-10-10"
     * }));
     */
    addTodo: (state, action) => {
      state.todos = [...state.todos, action.payload];
    },

    /**
     * Deletes a todo item from the list based on its index.
     * @function deleteTodo
     * @param {Object} state - The current state of the todos array.
     * @param {Object} action - Contains the payload with the index of the todo to be deleted.
     * @param {number} action.payload - The index of the todo item to delete.
     * @example
     * dispatch(deleteTodo(2)); // Deletes the todo at index 2
     */
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo, index) => index !== action.payload
      );
    },

    /**
     * Updates a specific todo item in the list.
     * @function updateToDo
     * @param {Object} state - The current state of the todos array.
     * @param {Object} action - Contains the payload with the index and updated todo data.
     * @param {number} action.payload.index - The index of the todo item to update.
     * @param {Object} action.payload.updatedData - The new data to update the todo with.
     * @example
     * dispatch(updateToDo({
     *   index: 1,
     *   updatedData: {
     *     taskName: "Update project report",
     *     taskPriority: "medium",
     *     dueDate: "2024-10-12"
     *   }
     * }));
     */
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
