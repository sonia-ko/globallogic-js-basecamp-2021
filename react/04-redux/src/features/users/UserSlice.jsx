import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRoles,
  fetchUsers,
  createUser,
  updateUser,
  cloneUser,
  removeUser,
} from "./thunks";

const initialState = {
  list: [],
  usersFetched: false,
  roles: [],
  rolesFetched: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state, action) => {
        state.usersFetched = false;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.usersFetched = true;
        state.list = [...action.payload];
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.usersFetched = false;
        window.alert(`Failed to fetch users`);
      })
      .addCase(fetchRoles.pending, (state, action) => {
        state.rolesFetched = false;
      })
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.rolesFetched = true;
        state.roles = state.roles.concat(action.payload);
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.rolesFetched = false;
        window.alert(`Failed to fetch roles`);
      })
      .addCase(createUser.pending, (state, action) => {
        state.usersFetched = false;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.usersFetched = true;
        state.list = state.list.concat(action.payload);
      })
      .addCase(createUser.rejected, (state, action) => {
        window.alert(`Failed to add user`);
      })
      .addCase(updateUser.pending, (state, action) => {
        state.usersFetched = false;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.usersFetched = true;
        state.list = state.list.map((user) =>
          user.id === action.payload.id ? action.payload : user
        );
      })
      .addCase(updateUser.rejected, (state, action) => {
        window.alert(`Failed to add user`);
      })
      .addCase(cloneUser.pending, (state, action) => {
        state.usersFetched = false;
      })
      .addCase(cloneUser.fulfilled, (state, action) => {
        state.usersFetched = true;
        state.list = state.list.concat(action.payload);
      })
      .addCase(cloneUser.rejected, (state, action) => {
        window.alert(`Failed to clone user`);
      })
      .addCase(removeUser.pending, (state, action) => {
        state.usersFetched = false;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.usersFetched = true;
        state.list = state.list.filter(
          (user) => user.id !== action.payload[0].id
        );
      })
      .addCase(removeUser.rejected, (state, action) => {
        window.alert(`Failed to remove user`);
      });
  },
});

export const { deleteUser, editUser } = usersSlice.actions;

export default usersSlice.reducer;
