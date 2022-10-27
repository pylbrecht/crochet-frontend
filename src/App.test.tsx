import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows form to create a project", () => {
    render(<App />);

    expect(screen.getByPlaceholderText("My new project")).toBeDefined();
    expect(screen.getByRole("button")).toHaveProperty(
      "value",
      "Create project"
    );
  });
});
