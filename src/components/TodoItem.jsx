export default function TodoItem({ todo, deleteTodo, updateTodo }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{todo.text}</span>
      <div>
        <button
          onClick={() => {
            const newText = prompt("Yeni metin:", todo.text);
            if (newText) updateTodo(todo.id, newText);
          }}
          className="btn btn-warning btn-sm me-2"
        >
          Güncelle
        </button>
        <button
          onClick={() => deleteTodo(todo.id)}
          className="btn btn-danger btn-sm"
        >
          Sil
        </button>
      </div>
    </li>
  );
}