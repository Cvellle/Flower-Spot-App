// @ts-nocheck
import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Profile from "../components/Profile";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
const Tree = (
  <QueryClientProvider client={queryClient}>
    <Profile />
  </QueryClientProvider>
);

test("Profile component snapshot", () => {
  const tree = TestRenderer.create(Tree).toJSON();
  expect(tree).toMatchSnapshot();
});

test("renders logout button correctly", () => {
  render(Tree);
  const linkElement = screen.getByText("Logout");
  expect(linkElement).toBeInTheDocument();
});
