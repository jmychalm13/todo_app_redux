import { Todos } from "./Todos";
import { useSelector } from "react-redux";

export function Home() {
  const title = useSelector((state) => state.todos.appTitle);

  return (
    <div className="mb-auto mx-4 px-4">
      <h1 className="text-4xl font-bold text-center my-4">{title}</h1>
      <Todos></Todos>
    </div>
  );
}
