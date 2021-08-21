import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api/userApi/index.js";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const payload = await api.getUsers();
  return payload;
});

export const getUser = createAsyncThunk("users/get", async (id) => {
  const payload = await api.getUser(id);
  return payload;
});

export const createUser = createAsyncThunk("users/create", async (user) => {
  const payload = await api.createUser(user);
  return payload;
});

export const updateUser = createAsyncThunk("users/update", async (user) => {
  const payload = await api.editUser(user);
  return payload;
});

export const fetchRoles = createAsyncThunk("roles/fetch", async () => {
  const payload = await api.getRoles();
  return payload;
});

export const cloneUser = createAsyncThunk("users/clone", async (user) => {
  const payload = await api.editUser(user);
  return payload;
});

export const removeUser = createAsyncThunk("users/remove", async (user) => {
  const payload = await api.deleteUser(user);
  return payload;
});
