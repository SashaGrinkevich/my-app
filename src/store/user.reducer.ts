import { createSlice } from "@reduxjs/toolkit";
import { Repositories } from "../api/Repos";
import { User } from "../api/User";
import { getUserThunk, getReposThunk } from "../api/getUsersInfo";

interface UserState {
  repos: Repositories[];
  user: User | null;

  isUserPageLoading: boolean;

  description: string;
  name: string;
  error: boolean;
  search: string;
}

const initialState: UserState = {
  repos: [],
  user: null,

  isUserPageLoading: false,

  description: "",
  error: false,
  name: "",
  search: "",
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserThunk.pending, (state) => {
      state.isUserPageLoading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.isUserPageLoading = false;
      state.user = payload;
      console.log(payload);
    });
    builder.addCase(getUserThunk.rejected, (state) => {
      state.isUserPageLoading = false;
    });

    builder.addCase(getReposThunk.pending, (state) => {
      state.isUserPageLoading = true;
    });
    builder.addCase(getReposThunk.fulfilled, (state, { payload }) => {
      state.isUserPageLoading = false;
      state.repos = payload;
      console.log(payload);
    });
    builder.addCase(getReposThunk.rejected, (state) => {
      state.isUserPageLoading = false;
    });
  },
});

export default usersSlice.reducer;
