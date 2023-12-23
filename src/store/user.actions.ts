import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, getUser } from "../api/getUser";
import { RootState } from ".";
import { getSlice } from "./user.selectors";
import { getRepos } from "../api/getRepos";

export const getUserThunk = createAsyncThunk(
    "users/getUserThunk",
    (name: User["id"], { rejectWithValue }) => {
      try{
    return getUser({ name })
    } catch (error) {
      return rejectWithValue(error)
    }
  }
  );

  export const getReposThunk = createAsyncThunk(
    "users/getReposThunk",
    async (param, thunkApi) => {
      const { getState } = thunkApi;
      const { page, name, pageLimit } = getSlice(getState() as RootState);
  
      return getRepos({ page, name, pageLimit});
    }
  )


