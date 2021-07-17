import axios from "axios";
import { actions } from "./";

axios.defaults.baseURL = "http://localhost:4040";

const fetchContacts = () => async (dispatch) => {
  dispatch(actions.fetchContactsRequest());

  axios
    .get("/contacts")
    .then(({ data }) => dispatch(actions.fetchContactsSuccess(data)))
    .catch((error) => dispatch(actions.fetchContactsError(error)));
};

const addContact = (contact) => (dispatch) => {
  dispatch(actions.addContactRequest());

  axios
    .post("/contacts", contact)
    .then(({ data }) => dispatch(actions.addContactSuccess(data)))
    .catch((error) => dispatch(actions.addContactError(error)));
};

const deleteContact = (contactId) => (dispatch) => {
  dispatch(actions.deleteContactRequest());

  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(actions.deleteContactSuccess(contactId)))
    .catch((error) => dispatch(actions.deleteContactError(error)));
};

const operations = {
  fetchContacts,
  addContact,
  deleteContact,
};

export default operations;
