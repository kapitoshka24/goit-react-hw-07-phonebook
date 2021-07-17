import { connect } from "react-redux";
import { operations, selectors } from "../../redux/contacts/";
import ContactList from "./ContactList";

const mapStateToProps = (state) => ({
  items: selectors.getVisibleContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onDelete: (contactId) => dispatch(operations.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
