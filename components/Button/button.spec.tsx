import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Button from "./Button";

const args = {
  text: "Política",
  isSelected: false,
};

describe("<Button/>", () => {
  it("should load the component with default properties", async () => {
    render(<Button attributes={args} />);

    const btn = screen.getByText(args.text);

    expect(btn).toBeInTheDocument();
  });

  it("should be selected when clicked", () => {
    render(<Button attributes={args} />);
    const btn = screen.getByText(args.text);
    fireEvent.click(btn);
    expect(btn).toHaveClass("selected");
  });
});
