import React from "react";
import Filter from "./";

const selectOptions = [
  {
    text: "WEEK",
    value: 1,
  },
  {
    text: "MONTH",
    value: 2,
  },
  {
    text: "QUARTER",
    value: 3,
  },
  {
    text: "YEAR",
    value: 4,
  },
];

export const WithoutProps = () => <Filter />;
export const WithProps = () => <Filter options={selectOptions} />;

export default {
  title: "Components/Filter",
  component: Filter,
};
