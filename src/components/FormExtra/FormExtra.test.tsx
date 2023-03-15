import React from "react";
import { render, screen } from "@testing-library/react";
import FormExtra from "./index";

describe("FormExtra", () => {
  test("renders checkbox input", () => {
    render(<FormExtra />);
    const checkbox = screen.getByRole("checkbox", { name: "Remember me" });
    expect(checkbox).toBeInTheDocument();
  });

  test("renders checkbox label", () => {
    render(<FormExtra />);
    const label = screen.getByText("Remember me");
    expect(label).toBeInTheDocument();
  });

  test("checkbox is unchecked by default", () => {
    render(<FormExtra />);
    const checkbox = screen.getByRole("checkbox", { name: "Remember me" });
    expect(checkbox).not.toBeChecked();
  });
});
