import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogout, login, refreshUser, register } from "./operations";

const INITIAL_STATE = {
  userData: {
    name: null,
    email: null,
  },
  isSignedIn: false,
  token: null,
  isLoading: false,
  isError: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })

      .addCase(apiLogout.fulfilled, (state) => {
        state.userData = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isSignedIn = false;
      })

      .addCase(refreshUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSignedIn = true;
        state.userData = action.payload;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(
          register.pending,
          login.pending,
          refreshUser.pending,
          apiLogout.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )

      .addMatcher(
        isAnyOf(
          register.rejected,
          login.rejected,
          refreshUser.rejected,
          apiLogout.rejected
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
