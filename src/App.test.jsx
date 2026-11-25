import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router";
import App from "./App.jsx";

// Two sample tests so `npm test` passes from the starter.
// They do not count toward your required tests. Replace them with tests of your own behavior.
test("shows the starter heading", () => {
  render(<MemoryRouter>
         <App />
  </MemoryRouter>
  );
  expect(screen.getByText("Book Catalog")).toBeInTheDocument();
});

test("renders a main landmark", () => {
  render(
  <MemoryRouter>
     <App />
    </MemoryRouter>);
  expect(screen.getByRole("main")).toBeInTheDocument();
});
