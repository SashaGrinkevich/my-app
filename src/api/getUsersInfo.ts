import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./env";
import { Repositories } from "./Repos";
import { User } from "./User";

export const getUserThunk = createAsyncThunk(
  "users/getUserThunk",
  async (name:string, thunkAPI) => {
    try {
      const response = await instance.get<User>(`/${name}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getReposThunk = createAsyncThunk(
  "repos/getReposThunk",
   async (name:string, thunkAPI) => {
    try {
      const response = await instance.get<Repositories[]>(`/${name}/repos`, {});
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
