import React from "react";
import { setupServer } from "msw/node";
import { rest } from "msw";
import { v4 as uuidv4 } from "uuid";
import { render, within, screen } from "@testing-library/react";
import App from "./App";

const handlers = [
  rest.post("/projects", async (req, res, ctx) => {
    const name = await req.json().then((data) => data.name);

    return res(
      ctx.status(201),
      ctx.json({
        id: uuidv4(),
        name: name,
      })
    );
  }),
  rest.get("/projects", async (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: uuidv4(),
          name: "a project",
        },
        {
          id: uuidv4(),
          name: "another project",
        },
      ])
    );
  }),
];

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  it("shows a list of projects", async () => {
    render(<App />);

    const projects = await screen.findByRole("list");

    expect(await within(projects).findByText("a project")).toBeVisible();
    expect(await within(projects).findByText("another project")).toBeVisible();
  });

  it("shows a form to create a new project", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText("New project");
    const button = screen.getByRole("button");

    expect(input).toBeVisible();
    expect(button).toBeVisible();
    expect(button).toHaveDisplayValue("Create");
  });
});
