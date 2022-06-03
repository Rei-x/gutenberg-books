import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "../Filters";

const renderFilters = () => {
  const setFilters = jest.fn();
  const utils = render(<Filters setFilters={setFilters} />);

  return {
    user: userEvent.setup(),
    setFilters,
    ...utils,
  };
};

describe("Filters", () => {
  test("Show and hide filters", async () => {
    const { user, setFilters } = renderFilters();

    const defaultOption = "All languages";
    expect(screen.queryByText(defaultOption)).not.toBeInTheDocument();

    await user.click(screen.getByText("Show filters"));

    expect(screen.getByText(defaultOption)).toBeInTheDocument();
    expect(setFilters).toHaveBeenCalledTimes(0);
  });

  test("Selecting language sets language in setFilters", async () => {
    const { user, setFilters } = renderFilters();

    await user.click(screen.getByText("Show filters"));
    await user.selectOptions(screen.getByTestId("language-select"), "Polish");

    expect(setFilters).toHaveBeenCalledTimes(1);
    expect(setFilters).toHaveBeenCalledWith({ languages: "pl" });
  });
});
