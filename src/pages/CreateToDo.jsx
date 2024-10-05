import React, { useEffect, useState } from "react";

const CreateToDo = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "high",
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
  };

  useEffect(()=>{
    console.log("Current Form data : ", formData);
  },[formData]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-2xl">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            Create new Task
          </h2>
          <label className="font-medium text-gray-700">Task Title</label>
          <input
            onChange={handleDataChange}
            value={formData.title}
            type="text"
            name="title"
            placeholder="Enter task title"
            className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 "
          />

          <div className="flex flex-col gap-4">
            <label className="font-medium text-gray-700">
              Task description
            </label>
            <textarea
              onChange={handleDataChange}
              value={formData.description}
              type="text"
              name="description"
              placeholder="Enter task description"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 "
            />
          </div>
          <div className="flex flex-col gap-4">
            <label className="font-medium text-gray-700">Task Priority</label>
            <select
              onChange={handleDataChange}
              name="priority"
              value={formData.priority}
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 "
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="flex flex-col gap-4">
            <label className="font-medium text-gray-700">Due Date</label>
            <input
              onChange={handleDataChange}
              value={formData.duedate}
              type="date"
              name="duedate"
              className="border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-orange-500 "
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 "
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateToDo;
