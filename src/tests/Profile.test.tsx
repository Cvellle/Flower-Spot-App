// @ts-nocheck
import { expect } from "@jest/globals";
import { render, screen } from "@testing-library/react";
import TestRenderer from "react-test-renderer";
import Profile from "../components/Profile";
import "@testing-library/jest-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();
const Tree = (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Profile />
    </QueryClientProvider>
  </BrowserRouter>
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
