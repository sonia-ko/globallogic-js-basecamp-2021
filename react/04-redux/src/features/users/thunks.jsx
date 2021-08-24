import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "./api/userApi/index.js";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const payload = await api.getUsers();
    return payload;
  } catch {
    window.alert("Failed to fetch users");
  }
});

export const getUser = createAsyncThunk("users/get", async (id) => {
  try {
    const payload = await api.getUser(id);
    return payload;
  } catch {
    window.alert("Failed to get user");
  }
});

export const createUser = createAsyncThunk("users/create", async (user) => {
  try {
    const payload = await api.createUser(user);
    return payload;
  } catch {
    window.alert("Failed to create user");
  }
});

export const updateUser = createAsyncThunk("users/update", async (user) => {
  try {
    const payload = await api.editUser(user);
    return payload;
  } catch {
    window.alert("Failed to update user");
  }
});

export const fetchRoles = createAsyncThunk("roles/fetch", async () => {
  try {
    const payload = await api.getRoles();
    return payload;
  } catch {
    window.alert("Failed to fetch roles");
  }
});

export const cloneUser = createAsyncThunk("users/clone", async (user) => {
  try {
    const payload = await api.editUser(user);
    return payload;
  } catch {
    window.alert("Failed to clone user");
  }
});

export const removeUser = createAsyncThunk("users/remove", async (user) => {
  try {
    const payload = await api.deleteUser(user);
    return payload;
  } catch {
    window.alert("Failed to clone user");
  }
});
