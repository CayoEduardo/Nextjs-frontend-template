import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SavingPlans from "./SavingPlans";

const args = {
  //   text: "Política",
  //   isSelected: false,
};

describe("<SavingPlans/>", () => {
  it("should load the component with default properties", async () => {
    // render(<SavingPlans attributes={args} />);
    // const btn = screen.getByText(args.text);
    // expect(btn).toBeInTheDocument();
  });

  it("should be selected when clicked", () => {
    // render(<SavingPlans attributes={args} />);
    // const btn = screen.getByText(args.text);
    // fireEvent.click(btn);
    // expect(btn).toHaveClass("selected");
  });
});
