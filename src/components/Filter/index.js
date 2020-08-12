import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  max-width: 300px;
`;

const Label = styled.label`
  margin-right: 12px;
  width: 40%;
`;

const Select = styled.select`
  padding: 6px 12px;
  background-color: transparent;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 100%;
  max-width: 230px;
  min-width: 190px;
  border-radius: 4px;
  text-align-last: center;
`;

const Option = styled.option``;

/**
 * Represents the component Filter.
 *
 * @param {array} options - The options that will be render in select, it
 * need to be an array of objects with 'value' and 'text' keys. If the options
 * has length 0, a message will be render instead.
 * @example
 * [
 *  {
 *    value: "MONTH"
 *    text: "This month"
 *  },
 * {
 *    value: "YEAR"
 *    text: "This year"
 *  }
 * ]
 *
 * @param {string} testeId - The helping props for tests purposes.
 * @param {any} selectectValue - The flter selected value.
 * @param {function} handleChange - The function to handle select onChange.
 */

function Filter({ options, testeId, selectectValue, handleChange }) {
  return (
    <Wrapper>
      {options.length !== 0 ? (
        <>
          <Label>Filter by</Label>
          <Select
            data-testid={testeId}
            value={selectectValue}
            onChange={handleChange}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.text}
              </Option>
            ))}
          </Select>
        </>
      ) : (
        "There is no option to filter"
      )}
    </Wrapper>
  );
}

Filter.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      time_unit: PropTypes.string,
      time_unit_count: PropTypes.number,
    })
  ),
  handleChange: PropTypes.func,
  selectectValue: PropTypes.any,
  testId: PropTypes.string,
};

Filter.defaultProps = {
  options: [],
  handleChange: () => {},
  selectectValue: "selectedValue",
  testId: "filterId",
};

export default Filter;
