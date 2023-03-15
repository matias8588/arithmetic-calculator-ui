/* eslint-disable testing-library/prefer-screen-queries */
import { render, fireEvent } from "@testing-library/react";
import Login from "./index";

describe("Login", () => {
  it("renders all input fields", () => {
    const { getByLabelText } = render(<Login />);
    expect(getByLabelText("Email")).toBeInTheDocument();
    expect(getByLabelText("Password")).toBeInTheDocument();
  });

  it("updates state when inputs change", () => {
    const { getByLabelText } = render(<Login />);
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@example.com" },
    });
    expect(getByLabelText("Email")).toHaveValue("test@example.com");
  });

  it("calls authenticateUser when form is submitted", () => {
    const authenticateUser = jest.fn();
    const { getByText } = render(<Login />);
    fireEvent.submit(getByText("Login"));
    expect(authenticateUser).toHaveBeenCalled();
  });
});
