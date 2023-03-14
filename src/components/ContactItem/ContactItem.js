import React from 'react';
import PropTypes from 'prop-types';
import './ContactItem.styled.css';

const ContactItem = ({ id, name, number, onClick }) => (
  <li>
    {' '}
    <span className="contact__name">{name}</span>:{' '}
    <span className="contact__number">{number}</span>
    <button type="button" onClick={() => onClick(id)}>
      Delete
    </button>
  </li>
);
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
export default ContactItem;
