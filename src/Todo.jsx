export function Todo(props) {
  return (
    <div>
      <h1>Todo</h1>
      <p>{props.todo.text}</p>
      <small>{props.todo.status}</small>
    </div>
  );
}
