import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, getUser } from "../api/getUser";
import { getUsers } from "../api/getUsers";
import { RootState } from ".";
import { getSlice } from "./user.selectors";
import { getSearchUsers } from "../api/getSearchUser";
// import { getSearchUsers } from "../api/getSearchUser";

export const getUserThunk = createAsyncThunk(
    "users/getUserThunk",
    (name: User["id"]) => {
    return getUser({ name })
    }
  );

  // type GetUsersParams = {
  //   search: string;
  //   page: string;
  //   repos:string;
  //   pageLimit:string;
  //   name:string;
  // };
  export const getUsersThunk = createAsyncThunk(
    "users/getUsers",
    async (param, thunkApi) => {
      const { getState } = thunkApi;
      const { page,repos,pageLimit,name} = getSlice(getState() as RootState);
      return getUsers({
        page,pageLimit,name,repos,
      });
    }
  )

  // type GetUsersSearchParams = {
  //   search: string;
  //   page: string;
  // };
  export const getSearchUsersThunk = createAsyncThunk(
    "users/getSearchUsers",
    async (param, thunkApi) => {
      const { getState } = thunkApi;
      const { page,search } = getSlice(getState() as RootState);
  
      return getSearchUsers({ page, search});
    }
  )


