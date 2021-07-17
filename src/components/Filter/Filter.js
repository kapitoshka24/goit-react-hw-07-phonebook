import React from "react";
import PropTypes from "prop-types";
import "./Filter.css";

const Filter = ({ value, onChangeFilter }) => (
  <label>
    Find contacts by name
    <input type="text" value={value} onChange={onChangeFilter} />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
