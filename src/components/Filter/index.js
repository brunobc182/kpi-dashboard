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

function Filter({ options, handleChange }) {
  return (
    <Wrapper>
      {options.length !== 0 ? (
        <>
          <Label>Filter by</Label>
          <Select onChange={handleChange}>
            {options.map((option) => (
              <Option key={option.time_unit} value={JSON.stringify(option)}>
                {option.time_unit}
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
};

Filter.defaultProps = {
  options: [],
  handleChange: () => {},
};

export default Filter;
