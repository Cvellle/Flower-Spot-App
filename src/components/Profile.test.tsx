// @ts-nocheck
import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Profile from "./Profile";
import "@testing-library/jest-dom";

test("renders Profile component correctly", () => {
  const tree = TestRenderer.create(<Profile />).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders logout button correctly", () => {
  render(<Profile />);
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument();
});
