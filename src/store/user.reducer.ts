import { User } from "../api/getUser";
import { createSlice } from "@reduxjs/toolkit";
import { getReposThunk, getUserThunk } from "./user.actions";
import { Repositories } from "../api/Repos";

interface UserState {
  per_page: string;
  name: string;
  pageLimit:string;
  repos: Repositories[];
  repo: Repositories | null
  description: string;

  isUserPageLoading: boolean;
  user: User | null;

  search: string;
  searchUsers: User[];
  page: string;
  total: string;
}

const initialState: UserState = {
  per_page: "",
  name: "",
  pageLimit:'',
  repos: [],
  repo: null,
  description: '',

  isUserPageLoading: false,
  user: null,

  search: "",
  searchUsers: [],
  page: '',
  total: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: { 
  },
  extraReducers(builder) {
    builder.addCase(getUserThunk.pending, (state) => {
      state.isUserPageLoading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.isUserPageLoading = false;
      state.user = payload
      console.log(payload)
    });
    builder.addCase(getUserThunk.rejected, (state) => {
      state.isUserPageLoading = false; 
    });

    builder.addCase(getReposThunk.pending, (state) => {
      state.isUserPageLoading = true;
    });
    builder.addCase(getReposThunk.fulfilled, (state, { payload }) => {
      state.isUserPageLoading = false;
      state.repos = payload.repos
      console.log(payload)
    });
    builder.addCase(getReposThunk.rejected, (state) => {
      state.isUserPageLoading = false;
    });
    
  },
});

export const {
} = usersSlice.actions;

export default usersSlice.reducer;
