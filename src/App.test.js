import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the portfolio's primary content and project links", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", { name: /thoughtful interfaces\. solid front-end\./i })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Git Galaxy Finder" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Product Feedback App" })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /source code/i })).toHaveLength(2);
  expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
});
