import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  title: "",
  todos: [],
};

const toDoListSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.todos.push(action.payload);
        state.title = "";
      },
      prepare({ title }) {
        const id = Date.now();
        const isCompleted = false;
        return {
          payload: { id, title, isCompleted },
        };
      },
    },

    setTitle(state, action) {
      state.title = action.payload;
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
