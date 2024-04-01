import { useDispatch } from "react-redux";
import { toggleStatus } from "./store/slice";

export function Todo(props, toggleStatus) {
  const dispatch = useDispatch();

  const handleStatus = (todo) => {
    dispatch(toggleStatus(todo));
  };

  return (
    <div>
      <h1>Todo</h1>
      <p>{props.todo.text}</p>
      <small>{props.todo.status}</small>
      <div>
        <button type="button" onClick={handleStatus}>
          Change Status
        </button>
      </div>
    </div>
  );
}
