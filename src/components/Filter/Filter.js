import React from "react";
import PropTypes from 'prop-types';
import './filter.styled.css';

const Filter = ({findeName, filter}) => {
    return (
      <>
        <p>Find contacts by name</p>
        <label>
          <input
            placeholder="Name"
            onChange={findeName}
            type="text"
            name="filter"
            value={filter}
          />
        </label>
      </>
    );
}

Filter.propTypes = {
  findeName: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,

}
export default Filter
