import { useSelector } from "react-redux";

export function Todos() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <h1>All todos</h1>
      {todos.map((todo) => (
        <div key={todo.id}>
          <p>{todo.text}</p>
          <small>{todo.status}</small>
        </div>
      ))}
    </div>
  );
}
