import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { apiLogout, login, refreshUser, register } from "./operations";

const INITIAL_STATE = {
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

      .addCase(apiLogout.fulfilled, () => {
        return INITIAL_STATE;
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
        state.isRefreshing = false;
      })

      .addCase(refreshUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isRefreshing = false;
      })

      .addMatcher(
        isAnyOf(register.pending, login.pending, apiLogout.pending),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )

      .addMatcher(
        isAnyOf(register.rejected, login.rejected, apiLogout.rejected),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const authReducer = authSlice.reducer;
