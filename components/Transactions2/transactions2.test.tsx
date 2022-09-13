import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import Transactions from "./Transactions2";

describe("<Transactions/>", () => {
  it("should render with no operations", () => {
    const args = {
      operations: [],
    };

    render(<Transactions attributes={args} />);

    const header = screen.getByText("Transactions");
    console.log(header.firstChild);

    expect(header).toBeInTheDocument();
  });
});
