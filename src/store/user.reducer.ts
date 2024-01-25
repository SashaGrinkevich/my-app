import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Repositories } from "../api/Repos";
import { User } from "../api/User";
import { getUserThunk, getReposThunk } from "../api/getUsersInfo";

 interface UserState {
  repos: Repositories[];
  user: User | null;
  isUserPageLoading: boolean;
  description: string;
  name: string;
  error: string | null;
  currentPage: number;
  page:number;
}

const initialState: UserState = {
  repos: [],
  user: null,
  isUserPageLoading: false,
  description: "",
  error: null,
  name: "",
  currentPage: 1,
  page:1,
 

};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setPage: (state, {payload}) => {
      state.page = payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUserThunk.pending, (state) => {
      state.isUserPageLoading = true;
    });
    builder.addCase(getUserThunk.fulfilled, (state, { payload }) => {
      state.isUserPageLoading = false;
      state.user = payload;
    });
    builder.addCase(getUserThunk.rejected, (state, action) => {
      state.isUserPageLoading = false;
      state.error = action.error.message ?? null;
    });

    builder.addCase(getReposThunk.pending, (state) => {
      state.isUserPageLoading = true;
    });
    builder.addCase(getReposThunk.fulfilled, (state, { payload }) => {
      state.isUserPageLoading = false;
      state.repos = payload;
    });
    builder.addCase(getReposThunk.rejected, (state, action) => {
      state.isUserPageLoading = false;
      state.error = action.error.message ?? null;
    });
  },
});

export const { setPage } = usersSlice.actions

export default usersSlice.reducer;
