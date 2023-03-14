import React from "react";
import "./App.styled.css"
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList"
import Filter from "./Filter/Filter"

// import PropTypes from 'prop-types';

export class App extends React.Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  getContactData = data => {
    const isContactPresent = this.state.contacts.find(
      contact => contact.name === data.name
    );
    if (isContactPresent) {
      return Notiflix.Notify.failure(`${data.name} is alredy in contacts`);
    }
    const newContact = {
      ...data,
      id: nanoid(),
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  handleInputFilter = evt => {
    const searchValue = evt.target.value;
    this.setState({ filter: searchValue });
  };

  handleDeleteBtn = id => {
    this.setState(({contacts}) => ({contacts: contacts.filter(contact => contact.id !== id)}));
  }

  render() {
    return (
      <section>
        <h2>Phonebook</h2>
        <ContactForm
          getContactData={this.getContactData}
          filter={this.setState.filter}
        />
        <h2>Contacts</h2>
        <Filter findeName={this.handleInputFilter} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onClick={this.handleDeleteBtn}
        />
      </section>
    );
  }
}
 

