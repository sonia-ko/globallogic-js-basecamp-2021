import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  todos: [],
};

const toDoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    setTitle(state, action) {
      state.title = action.payload;
    },
    prepare(id, title, todos) {
      return {
        payload: {
          id: Date.now(),
          title,
          todos,
        },
      };
    },
    addTodo(state, action) {
      state.title = "";
      state.todos.push(action.payload);
    },
    toggleTodo(state, action) {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo
      );
    },
    deleteTodo(state, action) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { setTitle, addTodo, toggleTodo, deleteTodo } =
  toDoListSlice.actions;

export default toDoListSlice.reducer;
