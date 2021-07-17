import React from "react";
import { connect } from "react-redux";
import { selectors } from "./redux/contacts/";
import ContactForm from "./components/ContactForm";
import Filter from "./components/Filter";
import ContactList from "./components/ContactList";
import Loader from "react-loader-spinner";

const App = ({ isLoading }) => (
  <>
    <h1>Phonebook</h1>
    <ContactForm />
    <h2>Contacts</h2>
    <Filter />

    {isLoading ? (
      <Loader
        className="Loader"
        type="Bars"
        color="#45a049"
        height={50}
        width={50}
      />
    ) : (
      <ContactList />
    )}
  </>
);

const mapStateToProps = (state) => ({
  isLoading: selectors.getLoading(state),
});

export default connect(mapStateToProps)(App);
