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
