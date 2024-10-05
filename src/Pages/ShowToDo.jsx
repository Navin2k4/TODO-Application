import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {deleteTodo} from '../slice/todo.slice'


const ShowToDo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todoSlice.todos);
  console.log(todos);
  
  const deleteToDo = (index) => {
    console.log(index);
    dispatch(deleteTodo(index))
  }
  const editTodo = (todoindex) => {
    navigate(`/edit/${todoindex}`)
  }
  return (
    <div>
      {todos.length == 0 && <div className="py-10 m-10 text-white text-center shadow-lg rounded-md bg-gradient-to-r from-orange-700 via-orange-500 to-orange-300" > No todos created</div>}
      {todos &&
        todos.map((todo, index) => (
          <div className="p-4 m-10 hover:-translate-y-2 transition-all duration-300 bg-gradient-to-br from-cyan-500 to-cyan-200 shadow-lg rounded-md">
            <h1 className="text-3xl p-2  font-bold tracking-widest text-white">Task {index + 1}</h1>
            <h2 className="text-2xl p-2 text-white font-semibold">Title : {todo.taskName}</h2>
            <h2 className="text-xl p-2 text-white tracking-wider">
              Description : {todo.taskDescription}
            </h2>
            <div className="flex items-center justify-between">
              <div className="flex p-2 items-start gap-2">
                <p
                  className={`uppercase p-2 rounded-lg
                ${todo.taskPriority === "high" ? "bg-red-400 text-white" : ""}
                ${todo.taskPriority === "medium" ? "bg-orange-400" : ""}
                ${todo.taskPriority === "low" ? "bg-yellow-400" : ""}
                `}
                >
                  Priority : {todo.taskPriority}
                </p>
                <p className="p-2 bg-yellow-200 max-w-fit rounded-lg ">
                  Due : {todo.duedate}
                </p>
              </div>
              <div className="flex gap-3 items-center justify-center">
                <button
                onClick={() => deleteToDo(index)} 
                  className="p-3 hover:bg-red-800 transition-all duration-300 cursor-pointer bg-red-400 text-white shadow-xl mt-2 max-w-fit rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
                    <path
                      fill-rule="evenodd"
                      d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
                <button onClick={()=>editTodo(index)} className="p-3 hover:bg-slate-400  transition-all duration-300 cursor-pointer bg-slate-300 text-white shadow-xl mt-2 max-w-fit rounded-full">
                  <svg
                    stroke="currentColor"
                    fill="black"
                    stroke-width="0"
                    viewBox="0 0 16 16"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M11.293 1.293a1 1 0 011.414 0l2 2a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-3 1a1 1 0 01-1.266-1.265l1-3a1 1 0 01.242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 00.5.5H4v.5a.5.5 0 00.5.5H5v.5a.5.5 0 00.5.5H6v-1.5a.5.5 0 00-.5-.5H5v-.5a.5.5 0 00-.5-.5H3z"
                      clip-rule="evenodd"
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
