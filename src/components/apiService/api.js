import axios from "axios";

axios.defaults.baseURL = "https://662761acb625bf088c0825f5.mockapi.io/";

export const fetchContacts = async () => {
  const data = await axios.get("/contacts");
  console.log(data);
  return data;
};

export const addContact = async (newContactData) => {
  const data = await axios.post("/contacts", newContactData);
  return data;
};

export const deleteContact = async (contactId) => {
  const data = await axios.delete(`/contacts/${contactId}`);
  return data;
};
