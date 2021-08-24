import "./styles.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  setTitle,
  addTodo,
  toggleTodo,
  deleteTodo,
} from "../todoList/TodoListSlice";
 

function TodoList() {
  const dispatch = useDispatch();
  const listItems = useSelector((state) => state.todoList.todos);
  const title = useSelector((state) => state.todoList.title);

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim()) {
      dispatch(
        addTodo({
          // I am leaving this as object, not as a string just in case it will be necessary to add some additional values in the future.
          title: title.trim(),
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
