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
        id: Math.floor(Math.random() * 1000),
        text: todoText,
        status: "incomplete",
      })
    );

    setTodoText("");
  };

  return (
    <div>
      <h1 className="text-3xl">All Todos</h1>
      <div>
        <label>Add Todo:</label>
        <input value={todoText} onChange={(event) => setTodoText(event.target.value)} type="text" />
        <button onClick={handleAdd}>Add</button>
      </div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </div>
  );
}
