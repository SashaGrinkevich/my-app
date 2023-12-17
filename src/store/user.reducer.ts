import { User } from "../api/getUser";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  users: User[];
  per_page: string;
  name: string;
  pageLimit:string;
  repos:string

  isUserPageLoading: boolean;
  user: User | null;

  search: string;
  searchUsers: User[];
  page: string;
  total: string;
  isSearchUsersLoading: boolean;
}

const initialState: UserState = {
  users: [],
  per_page: "",
  name: "",
  pageLimit:'',
  repos:'',

  isUserPageLoading: false,
  user: null,

  search: "",
  searchUsers: [],
  page: "",
  total: "",
  isSearchUsersLoading: false,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
      state.searchUsers = initialState.searchUsers;
    },

    setIsUsersPageLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserPageLoading = action.payload;
    },
    setIsUserPageLoading: (state, action: PayloadAction<boolean>) => {
      state.isUserPageLoading = action.payload;
    },

    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
  },
  
});

export const {
  setSearch,
  setIsUsersPageLoading,
  setIsUserPageLoading,
  setUser,
  setUsers,
} = usersSlice.actions;

export default usersSlice.reducer;
