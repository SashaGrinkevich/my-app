import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user.reducer";

export const store = configureStore({
    reducer:{
        user: userReducer 
    },
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['users/userReducer'],
      }
    })
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;