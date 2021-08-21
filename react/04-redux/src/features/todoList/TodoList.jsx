import "./styles.scss";
import { useDispatch } from "react-redux";
import {
  setTitle,
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../todoList/TodoListSlice";
import { useSelector } from "react-redux";

function TodoList() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.todoList.todos);
  const title = useSelector((state) => state.todoList.title);

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim()) {
      dispatch(
        addTodo({
          id: Date.now(),
          title: title.trim(),
          isCompleted: false,
        })
      );
    }
  }

  return (
    <div className="TodoList">
      <h2>To-Do list</h2>
      <form className="to-do-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => dispatch(setTitle(e.target.value))}
        />
      </form>

      <ul>
        {listItems.map(({ id, title, isCompleted }) => (
          <li key={id} onClick={() => dispatch(toggleTodo(id))}>
            <span
              style={{
                textDecoration: isCompleted ? "line-through" : "auto",
              }}
            >
              {title}
            </span>
            <button type="button" onClick={() => dispatch(deleteTodo(id))}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
