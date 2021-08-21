import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../features/users/UserSlice";
import todoListReducer from "../features/todoList/TodoListSlice";
import { logger } from "redux-logger/src";

export const store = configureStore({
    reducer: {
        users: usersReducer,
        todoList: todoListReducer,
    },
    // not sure if I was doing this correctly, the instructions were taken from this guide: https://redux-toolkit.js.org/api/configureStore . Still, it works for me:
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});