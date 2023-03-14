import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import './ContactList.styled.css';

function ContactList({ contacts, filter, onClick }) {
  let handledContacts = contacts;
  if (filter) {
    const filterReq = filter.toLowerCase();
    handledContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterReq)
    );
  }
  return (
    <ul>
      {handledContacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
export default ContactList;
