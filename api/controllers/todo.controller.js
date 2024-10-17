import Todo from "../model/todo.model.js";

export const createToDo = async (req, res) => {
  console.log(req.body);
  const { taskName, taskDescription, taskPriority, duedate } = req.body;
  try {
    const newTodo = new Todo({
      taskName,
      taskDescription,
      taskPriority,
      duedate,
    });
    console.log(newTodo);
    await newTodo.save();
    console.log("Saved To Do");
    res.status(201).json({ message: " creted to do" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating to do",
      error: error.message,
    });
  }
};

export const getToDo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({
      message: "Error creating to do",
      error: error.message,
    });
  }
};

export const deleteToDo = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTodo = await Todo.findByIdAndDelete(id);
    console.log(deletedTodo);
    if (!deletedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({
      message: "Error creating to do",
      error: error.message,
    });
  }
};

export const updateToDo = async (req, res) => {};
