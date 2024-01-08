import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./env";

export const getUserThunk = createAsyncThunk(
  "users/getUserThunk",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/${name}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getReposThunk = createAsyncThunk(
  "repos/getReposThunk",
  async (name: string, { rejectWithValue }) => {
    try {
      const response = await instance.get(`/${name}/repos`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
