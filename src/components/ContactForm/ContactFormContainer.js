import { connect } from "react-redux";
import { operations, selectors } from "../../redux/contacts/";
import ContactForm from "./ContactForm";

const mapStateToProps = (state) => ({
  contacts: selectors.getContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (contact) => dispatch(operations.addContact(contact)),
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
