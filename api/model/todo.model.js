import mongoose, { mongo } from "mongoose";

const todoSchema = new mongoose.Schema({
  taskName: {
    type: String,
    required: true,
  },
  taskDescription: {
    type: String,
    required: true,
  },
  taskPriority: {
    type: String,
    required: true,
  },
  duedate: {
    type: String,
    required: true,
  },
});

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
