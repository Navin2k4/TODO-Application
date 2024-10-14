import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const CreateToDo = () => {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    taskName: "",
    taskDescription: "",
    taskPriority: "high",
    duedate: "",
  });

  const handleDataChange = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    


    navigate('/todos')
  };

  useEffect(() => {
    console.log("Current form data:", formData);
  }, [formData]);

  return (
    <div className="max-w-md mx-auto mt-10 bg-gray-200 p-6 rounded-lg shadow-lg">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">Create New Task</h2>
          <div className="flex flex-col gap-2">
            <label htmlFor="task" className="font-medium text-gray-700">
              Task Name
            </label>
            <input
              type="text"
              onChange={handleDataChange}
              id="task"
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
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateToDo;
