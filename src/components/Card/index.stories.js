import React from "react";
import Card from "./";

export const Default = () => <Card />;
export const WithProps = () => (
  <Card
    bgColor="#e62a19"
    title="Active sourcing"
    currentPeriod={10}
    lastPeriod={15}
  />
);

export default {
  title: "Components/Card",
  component: Card,
};
