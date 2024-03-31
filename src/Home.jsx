import { Todos } from "./Todos";
import { useSelector } from "react-redux";

export function Home() {
  const title = useSelector((state) => state.todos.appTitle);

  return (
    <div>
      <h1>{title}</h1>
      <Todos></Todos>
    </div>
  );
}
