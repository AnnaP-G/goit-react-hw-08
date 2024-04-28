import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  isSignedIn: false,
  userData: "",
  token: null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: INITIAL_STATE,
});

export const authReducer = authSlice.reducer;
