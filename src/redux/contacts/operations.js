import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../../components/apiService/api.js";

export const apiFetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkApi) => {
    try {
      const { data } = await fetchContacts();
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// запит додавання
export const apiAddContact = createAsyncThunk(
  "contacts/addContact",
  async (newContactData, thunkApi) => {
    try {
      const { data } = await addContact(newContactData);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// запит видалення
export const apiDeleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkApi) => {
    try {
      const { data } = await deleteContact(contactId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
