import React from "react";
import { render } from "@testing-library/react";
import Card from "./";

describe("Card", () => {
  it("renders correctly", () => {
    const { container } = render(<Card />);

    expect(container).toMatchSnapshot();
  });

  it("renders correctly with default values", () => {
    const { container, getByText } = render(<Card />);
    const title = getByText(/Card title/i);
    const currentPeriod = getByText(/20/i);
    const lastPeriod = getByText(/30/i);

    expect(title).toBeInTheDocument();
    expect(currentPeriod).toBeInTheDocument();
    expect(lastPeriod).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it("renders correctly with given props", () => {
    const { container, getByText } = render(
      <Card
        bgColor="#e62a19"
        title="Active sourcing"
        currentPeriod={10}
        lastPeriod={15}
      />
    );
    const title = getByText(/Active sourcing/i);
    const currentPeriod = getByText(/10/i);
    const lastPeriod = getByText(/15/i);

    expect(title).toBeInTheDocument();
    expect(currentPeriod).toBeInTheDocument();
    expect(lastPeriod).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
