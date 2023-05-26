import React from "react";
import { render, screen } from "@testing-library/react";
import WebProjects from "../pages/web-projects";
import "@testing-library/jest-dom";
import { projects } from "../pages/api/projects";
import "../__mocks__/intersectionObserverMock";

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

test("make sure there are the right number of projects", async () => {
  render(<WebProjects projects={projects} />);

  const webProjects = projects.main.filter((p) => p.type === "web");

  webProjects.forEach(async (project) => {
    const p = await screen.findByText(new RegExp(project.name, "i"));
    expect(p).toHaveClass("project");
    expect(p).toBeInTheDocument();
  });
});
