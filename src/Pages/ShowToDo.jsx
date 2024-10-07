import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from '../slice/todo.slice';

const ShowToDo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoSlice.todos);
  console.log(todos);

  const deleteToDo = (index) => {
    console.log(index);
    dispatch(deleteTodo(index));
  };

  const editTodo = (todoIndex) => {
    navigate(`/edit/${todoIndex}`);
  };

  return (
    <div className="p-7" >
      {todos.length === 0 && (
        <div className="col-span-2 py-10 text-white text-center shadow-lg rounded-lg bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300">
          No todos created
        </div>
      )}
      {todos &&
        todos.map((todo, index) => (
          <div
            key={index}
            className="p-6 bg-gradient-to-br from-orange-400 to-orange-200 rounded-lg shadow-xl transition-transform transform hover:translate-y-1 hover:shadow-2xl"
          >
            <h1 className="text-3xl font-bold tracking-wide text-white pb-2">Task {index + 1}</h1>
            <h2 className="text-2xl text-gray-700 font-semibold pb-2">{todo.taskName}</h2>
            <h2 className="text-xl text-gray-600">Description{todo.taskDescription}</h2>
            <div className="flex items-center justify-between mt-4">
              <div className="flex items-center gap-2">
                <p
                  className={`p-2 rounded-lg text-white
                  ${todo.taskPriority === "high" ? "bg-red-500" : ""}
                  ${todo.taskPriority === "medium" ? "bg-orange-500" : ""}
                  ${todo.taskPriority === "low" ? "bg-yellow-400" : ""}
                  `}
                >
                  Priority: {todo.taskPriority}
                </p>
                <p className="p-2 max-w-fit rounded-lg bg-yellow-200 text-gray-800">
                  Due: {todo.duedate}
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => deleteToDo(index)}
                  className="p-3 transition-colors duration-300 cursor-pointer bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 hover:shadow-xl"
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
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
                  className="p-3 transition-colors duration-300 cursor-pointer bg-slate-300 text-white rounded-full shadow-lg hover:bg-slate-400 hover:shadow-xl"
                >
                  <svg
                    stroke="currentColor"
                    fill="black"
                    strokeWidth="0"
                    viewBox="0 0 16 16"
                    height="1.5em"
                    width="1.5em"
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
