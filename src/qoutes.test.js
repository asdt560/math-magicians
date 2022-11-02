import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Quote from "./components/Quote";

test("To test for display", () => {
  render(<Quote />);
  const tree = screen.getByText("Mathematics is not about numbers");
  expect(tree).toMatchSnapshot();
});
