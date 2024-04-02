import { useSelector, useDispatch } from "react-redux";
import { Todo } from "./Todo";
import { addToTodos } from "./store/slice";
import { useState } from "react";

export function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [todoText, setTodoText] = useState("");

  const handleAdd = () => {
    if (todoText === "") {
      return;
    }
    // dispatches an action to add a todo using the store function
    dispatch(
      addToTodos({
        id: todos.length + 1,
        text: todoText,
        completed: false,
      })
    );

    setTodoText("");
  };

  return (
    <div>
      <h1 className="text-2xl underline text-center mb-3">All Todos</h1>
      <div className="float-right">
        <label className="block text-sm font-medium leading-6 text-gray-900">Add todo:</label>
        <input
          type="text"
          value={todoText}
          onChange={(event) => setTodoText(event.target.value)}
          className="rounded-md border-0 py-1.5 pl-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mr-3"
        />
        <button
          onClick={handleAdd}
          className="py-2 bg-violet-500 text-white font-semibold rounded-full shadow-md hover:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-400 focus:ring-opacity-75"
        >
          Add
        </button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
