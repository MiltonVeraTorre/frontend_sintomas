import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./slices/authSlice";
import appSlice from "./slices/appSlice";






const store = configureStore({
  reducer: {
    auth:AuthSlice,
    app:appSlice
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
