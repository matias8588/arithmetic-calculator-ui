/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { render } from "@testing-library/react";
import Table from "./index";

describe("Table", () => {
  const columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
  ];

  const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];

  it("should render the correct number of rows", () => {
    const { getAllByRole } = render(<Table columns={columns} data={data} />);
    const rows = getAllByRole("row");
    expect(rows.length).toEqual(data.length + 1); // +1 for the header row
  });

  it("should render the correct column headers", () => {
    const { getByText } = render(<Table columns={columns} data={data} />);
    const nameHeader = getByText("Name");
    const ageHeader = getByText("Age");
    expect(nameHeader).toBeInTheDocument();
    expect(ageHeader).toBeInTheDocument();
  });
});
