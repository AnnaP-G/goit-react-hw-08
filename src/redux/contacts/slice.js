import { createSlice } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  apiFetchContacts,
} from "./contactsOps";

const INITIAL_STATE = {
  items: [],
  isLoading: false,
  isError: false,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: INITIAL_STATE,
  extraReducers: (builder) =>
    builder
      .addCase(apiFetchContacts.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })
      .addCase(apiFetchContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addCase(apiAddContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })
      .addCase(apiAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      })

      .addCase(apiDeleteContact.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })
      .addCase(apiDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload;
      }),
});

export const contactsReducer = contactsSlice.reducer;
