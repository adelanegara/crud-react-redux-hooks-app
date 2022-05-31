import React from "react";
import { screen, render } from "@testing-library/react";
import { NavbarUnwrapped } from "./index";

let wrapper;
beforeEach(() => {
  const { getByTestId } = render(<NavbarUnwrapped />);
  wrapper = getByTestId("navbar");
});

test("test navbar", () => {
  expect(wrapper).toBeInTheDocument();
});

test("Test title ABC Bank", () => {
  const wrapper = screen.getByText(/context api/);
  expect(wrapper).toBeInTheDocument();
});

test("Test title ABC Bank", () => {
  const wrapper = screen.getByText(/context api/);
  expect(wrapper).toMatchSnapshot();
});
