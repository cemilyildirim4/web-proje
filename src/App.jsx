import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => setTodos([...todos, { id: Date.now(), text }]);
  const deleteTodo = (id) => setTodos(todos.filter((t) => t.id !== id));
  const updateTodo = (id, text) =>
    setTodos(todos.map((t) => (t.id === id ? { ...t, text } : t)));

  return (
    <div className="container mt-5" style={{ maxWidth: "600px" }}>
      <h1 className="mb-4 text-center">Todo App</h1>
      <TodoForm addTodo={addTodo} />
      <ul className="list-group">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
          />
        ))}
      </ul>
    </div>
  );
}