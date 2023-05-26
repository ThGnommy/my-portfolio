import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Header from "../components/Header/Header";
import "@testing-library/jest-dom";

jest.mock("next/router", () => ({
  useRouter() {
    return {
      events: {
        on: jest.fn(),
        off: jest.fn(),
      },
    };
  },
}));

test("avatar should exists in homepage", async () => {
  render(<Header />);

  const avatar = screen.getByRole("img");
  expect(avatar).toHaveAttribute("alt", "avatar");
  expect(avatar).toBeInTheDocument();
});

describe("test all header links", () => {
  test("should find six link", () => {
    render(<Header />);
    // '/' 'web-project' 'mobile-project' 'pens' 'other-project' 'contact'
    const links = screen.getAllByRole("link");
    expect(links).toHaveLength(6);
  });

  test("home link", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toHaveAttribute("href", "/");
    expect(homeLink).toBeInTheDocument();
  });

  test("web link", () => {
    render(<Header />);

    const dropdown = screen.getByLabelText("dropdown-projects");
    fireEvent.mouseOver(dropdown);
    const webLink = screen.getByRole("link", { name: /web/i });
    expect(dropdown).toHaveClass("flex");
    expect(webLink).toHaveAttribute("href", "/web-projects");
    expect(webLink).toBeInTheDocument();
  });

  test("mobile link", () => {
    render(<Header />);

    const dropdown = screen.getByLabelText("dropdown-projects");
    fireEvent.mouseOver(dropdown);
    const mobileLink = screen.getByRole("link", { name: /mobile/i });
    expect(dropdown).toHaveClass("flex");
    expect(mobileLink).toHaveAttribute("href", "/mobile-projects");
    expect(mobileLink).toBeInTheDocument();
  });

  test("pens link", () => {
    render(<Header />);

    const dropdown = screen.getByLabelText("dropdown-fun");
    fireEvent.mouseOver(dropdown);
    const pensLink = screen.getByRole("link", { name: /pens/i });
    expect(dropdown).toHaveClass("flex");
    expect(pensLink).toHaveAttribute("href", "/pens");
    expect(pensLink).toBeInTheDocument();
  });

  test("other projects link", () => {
    render(<Header />);

    const dropdown = screen.getByLabelText("dropdown-fun");
    fireEvent.mouseOver(dropdown);
    const miniProjectsLink = screen.getByRole("link", {
      name: /mini projects/i,
    });
    expect(dropdown).toHaveClass("flex");
    expect(miniProjectsLink).toHaveAttribute("href", "/other-projects");
    expect(miniProjectsLink).toBeInTheDocument();
  });

  test("contact link", () => {
    render(<Header />);
    const homeLink = screen.getByRole("link", { name: /contact/i });
    expect(homeLink).toHaveAttribute("href", "/contact");
    expect(homeLink).toBeInTheDocument();
  });
});
