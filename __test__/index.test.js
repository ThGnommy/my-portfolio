import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header/Header";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      pathname: "/web-projects",
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    };
  },
}));

test("avatar should exist in homepage", async () => {
  render(<Header />);

  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute("alt", "avatar");
  expect(avatar).toBeInTheDocument();
});

test("should find six link", () => {
  render(<Header />);
  // '/' 'web-project' 'mobile-project' 'pens' 'other-project' 'contact'
  const links = screen.getAllByRole("link");
  expect(links).toHaveLength(6);
});
