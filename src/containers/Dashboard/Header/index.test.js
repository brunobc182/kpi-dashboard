import "@testing-library/jest-dom";
import React from "react";
import { render, cleanup, waitFor, fireEvent } from "@testing-library/react";
import { act } from "react-dom/test-utils";

import Header from "./";
import axiosMock from "axios";

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe("Header", () => {
  it("fetches data and renders correctly", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        data: {
          active_source: {
            current_period: 45,
            last_period: 30,
          },
        },
        status: "ok",
      },
    });

    const { container, getByTestId } = render(<Header />);
    expect(getByTestId("loading")).toHaveTextContent(/^Loading data...$/);
    expect(container).toMatchSnapshot();

    const cards = await waitFor(() => getByTestId("cards"));

    expect(cards).toBeInTheDocument();
    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith("data.json");
    waitFor(() => expect(container).toMatchSnapshot());
  });

  it("shows an error message when fetch data with a failed status", async () => {
    axiosMock.get.mockResolvedValueOnce({
      data: {
        data: {},
        status: "error",
      },
    });

    const { container, getByTestId } = render(<Header />);
    const erroMessage = await waitFor(() => getByTestId("error"));

    expect(erroMessage).toHaveTextContent(
      /^An error occurred when fetch the cards list, please try again.$/
    );
    waitFor(() => expect(container).toMatchSnapshot());
  });

  it("shows an error message when promise gets rejected", async () => {
    axiosMock.get.mockRejectedValueOnce({});

    const { container, getByTestId } = render(<Header />);
    const erroMessage = await waitFor(() => getByTestId("error"));

    expect(erroMessage).toHaveTextContent(
      /^An error occurred when fetch the cards list, please try again.$/
    );
    waitFor(() => expect(container).toMatchSnapshot());
  });

  it("fetches new data when a filter is selected", async () => {
    axiosMock.get.mockResolvedValue({
      data: {
        data: {
          active_source: {
            current_period: 45,
            last_period: 30,
          },
        },
        status: "ok",
      },
    });

    await act(async () => {
      const { getByTestId } = render(<Header />);
      const filter = await waitFor(() => getByTestId("filter"));
      fireEvent.change(filter, { target: { value: "WEEK" } });
    });

    expect(axiosMock.get).toHaveBeenCalledTimes(2);
    expect(axiosMock.get).toHaveBeenCalledWith("data.json");
  });
});
