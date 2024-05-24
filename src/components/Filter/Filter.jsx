import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
  <div className={css.filterContainer}>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Search contacts"
      className={css.input}
    />
  </div>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
