import { fireEvent, render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders the portfolio identity, case studies, and primary navigation", () => {
  render(<App />);

  expect(
    screen.getByRole("heading", {
      name: /salman ahmed khan, front-end developer\. useful software, shaped down to the last pixel\./i,
    })
  ).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Git Galaxy Finder" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: "Product Feedback App" })).toBeInTheDocument();
  expect(screen.getByRole("heading", { name: /pekka kana 2/i })).toBeInTheDocument();
  expect(screen.getAllByRole("link", { name: /source on github/i })).toHaveLength(2);
  expect(screen.getByRole("navigation", { name: /primary navigation/i })).toBeInTheDocument();
});

test("opens, filters, and closes quick navigation", () => {
  render(<App />);

  fireEvent.click(screen.getByRole("button", { name: "Open quick navigation" }));
  const dialog = screen.getByRole("dialog", { name: "Quick navigation" });
  expect(dialog).toBeInTheDocument();

  fireEvent.change(screen.getByLabelText("Search portfolio navigation"), {
    target: { value: "resume" },
  });
  expect(within(dialog).getByRole("link", { name: /resume/i })).toBeInTheDocument();
  expect(within(dialog).queryByRole("link", { name: /selected work/i })).not.toBeInTheDocument();

  fireEvent.keyDown(window, { key: "Escape" });
  expect(screen.queryByRole("dialog", { name: "Quick navigation" })).not.toBeInTheDocument();
});

test("interface lab controls provide immediate state feedback", () => {
  render(<App />);

  fireEvent.change(screen.getByLabelText("Filter the repository list"), {
    target: { value: "motion" },
  });
  expect(screen.getByText("motion-study")).toBeInTheDocument();
  expect(screen.queryByText("interface-notes")).not.toBeInTheDocument();

  const vote = screen.getByRole("button", { name: /72/ });
  fireEvent.click(vote);
  expect(screen.getByRole("button", { name: /73/ })).toHaveAttribute("aria-pressed", "true");

  fireEvent.change(screen.getByLabelText("Preview width"), { target: { value: "280" } });
  expect(screen.getByText("280px / mobile")).toBeInTheDocument();
});
