import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  padding: 6px 0;
`;

const Label = styled.label`
  margin-right: 12px;
`;

const Select = styled.select`
  padding: 6px 12px;
  background-color: transparent;
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
