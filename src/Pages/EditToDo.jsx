import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { updateToDo } from "../slice/todo.slice";

const EditToDo = () => {
  const { todoindex } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todoSlice.todos);

  const [formData, setFormData] = useState({
    taskName: todos[todoindex].taskName,
    taskDescription: todos[todoindex].taskDescription,
    taskPriority: todos[todoindex].taskPriority,
    duedate: todos[todoindex].duedate,
  });

  const handleDataChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateToDo({ index: todoindex, updatedData: formData }));
    navigate("/todos");
  };

  useEffect(() => {
    console.log("Current form data:", formData);
  }, [formData]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-6 rounded-lg shadow-lg">
      {/* <h1>{todoindex}</h1> */}
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create New Task
          </h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="task" className="font-medium text-gray-700">
              Task Name
            </label>
            <input
              type="text"
              onChange={handleDataChange}
              id="task"
              value={formData.taskName}
              name="taskName"
              placeholder="Enter task name"
              className="border border-gray-300 focus:ring-2 focus:ring-orange-500 rounded-md p-2"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="description" className="font-medium text-gray-700">
              Task Description
            </label>
            <textarea
              value={formData.taskDescription}
              name="taskDescription"
              id="description"
              onChange={handleDataChange}
              placeholder="Enter task description"
              className="border border-gray-300 focus:ring-2 focus:ring-orange-500 rounded-md p-2"
            ></textarea>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="priority" className="font-medium text-gray-700">
              Task Priority
            </label>
            <select
              onChange={handleDataChange}
              id="priority"
              value={formData.taskPriority}
              name="taskPriority"
              className="border border-gray-300 focus:ring-2 focus:ring-orange-500 rounded-md p-2"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dueDate" className="font-medium text-gray-700">
              Due Date
            </label>
            <input
              type="date"
              name="duedate"
              value={formData.duedate} // Bind the value to the state
              onChange={handleDataChange}
              id="dueDate"
              className="border border-gray-300 focus:ring-2 focus:ring-orange-500 rounded-md p-2"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600"
          >
            Update Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditToDo;
