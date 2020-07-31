import React from "react";
import { render } from "@testing-library/react";
import Filter from "./";

describe("Filter", () => {
  it("renders correctly", () => {
    const selectOptions = [
      {
        time_unit: "WEEK",
        time_unit_count: 1,
      },
      {
        time_unit: "MONTH",
        time_unit_count: 1,
      },
      {
        time_unit: "QUARTER",
        time_unit_count: 1,
      },
      {
        time_unit: "YEAR",
        time_unit_count: 1,
      },
    ];
    const { container } = render(<Filter options={selectOptions} />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with no options supplied", () => {
    const { container, getByText } = render(<Filter />);
    const empytFilterListMsg = getByText(/There is no option to filter/i);

    expect(empytFilterListMsg).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
