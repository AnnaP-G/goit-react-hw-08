export const selectContacts = (state) => state.contacts.items;
export const selectContactsIsLoading = (state) => state.contacts.loading;
export const selectContactsIsError = (state) => state.contacts.error;
export const selectTotalContacts = (state) => state.contacts.items.length;
