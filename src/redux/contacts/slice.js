import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  apiAddContact,
  apiDeleteContact,
  apiFetchContacts,
} from "../contacts/operations.js";
import { apiLogout } from "../auth/operations.js";

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
      .addCase(apiFetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })

      .addCase(apiAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items.push(action.payload);
      })

      .addCase(apiDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = state.items.filter(
          (contact) => contact.id !== action.payload.id
        );
      })

      .addCase(apiLogout.fulfilled, (state) => {
        state.userData = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoading = false;
      })

      .addMatcher(
        isAnyOf(
          apiFetchContacts.pending,
          apiAddContact.pending,
          apiDeleteContact.pending,
          apiLogout.pending
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      )

      .addMatcher(
        isAnyOf(
          apiFetchContacts.rejected,
          apiAddContact.rejected,
          apiDeleteContact.rejected,
          apiLogout.rejected
        ),
        (state) => {
          state.isLoading = true;
          state.isError = false;
        }
      ),
});

export const contactsReducer = contactsSlice.reducer;
