import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com/";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk("auth/register", async (credientials) => {
  try {
    const { data } = await axios.post("/users/signup", credientials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const login = createAsyncThunk("auth/login", async (credientials) => {
  try {
    const { data } = await axios.post("/users/login", credientials);
    token.set(data.token);
    return data;
  } catch (error) {}
});

const logout = createAsyncThunk("auth/logout", async (credientials) => {
  try {
    await axios.post("/users/logout");
    token.unset();
  } catch (error) {}
});

export { register, logout, login };
