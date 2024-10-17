import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShowToDo = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("/api/todos");
        const data = await response.json();
        setTodos(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const deleteToDo = async (id) => {
    console.log(id);
    try {
      await fetch(`/api/todos/${id}`, {
        method: "DELETE",
      });
      setTodos(todos.filter((todo) => todo._id !== id));
      // window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const editTodo = (todoIndex) => {
    // alert("Yet to implement")
    navigate(`/edit/${todoIndex}`);
  };

  return (
    <div className="p-7 space-y-4 grid">
      {todos.length === 0 && (
        <div className="col-span-2  py-10 text-gray-500 text-center rounded-lg border border-dashed">
          No todos created
        </div>
      )}
      {todos.map((todo, index) => (
        <div
          key={index}
          className="p-5  bg-orange-500 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
        >
          <h1 className="text-2xl font-medium text-white pb-1  tracking-widest">
            Task {index + 1}
          </h1>
          <h2 className="text-lg text-white font-semibold py-3">
            {todo.taskName}
          </h2>
          <p className="text-sm text-gray-100">{todo.taskDescription}</p>
          <div className="flex justify-between bg-white p-2 rounded-lg items-center mt-4">
            <div className="flex space-x-2 ">
              <span
                className={`px-3 py-1 rounded-full text-white text-xs 
              ${todo.taskPriority === "high" ? "bg-red-500" : ""} 
              ${todo.taskPriority === "medium" ? "bg-yellow-500" : ""} 
              ${todo.taskPriority === "low" ? "bg-green-500" : ""}`}
              >
                {todo.taskPriority}
              </span>
              <span className="px-3 py-1 bg-gray-200 rounded-full text-xs text-gray-800">
                Due: {todo.duedate}
              </span>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => deleteToDo(todo._id)}
                className="p-2 rounded-full bg-red-500 text-white hover:bg-red-600 transition"
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
                  <path
                    fillRule="evenodd"
                    d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
              <button
                onClick={() => editTodo(index)}
                className="p-2 rounded-full bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
              >
                <svg
                  stroke="currentColor"
                  fill="black"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowToDo;
