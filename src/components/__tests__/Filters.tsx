import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Filters from "../Filters";

const setup = (...args: Parameters<typeof render>) => {
  return {
    user: userEvent.setup(),
    ...render(...args),
  };
};

describe("Filters", () => {
  test("Show and hide filters", async () => {
    const setFilters = jest.fn();
    const { user } = setup(<Filters setFilters={setFilters} />);

    expect(screen.queryByText("All languages")).not.toBeInTheDocument();

    await user.click(screen.getByText("Show filters"));

    expect(screen.getByText("All languages")).toBeInTheDocument();
    expect(setFilters).toHaveBeenCalledTimes(0);
  });

  test("Selecting language sets language in setFilters", async () => {
    const setFilters = jest.fn();
    const { user } = setup(<Filters setFilters={setFilters} />);

    await user.click(screen.getByText("Show filters"));
    await user.selectOptions(screen.getByTestId("language-select"), "Polish");

    expect(setFilters).toHaveBeenCalledTimes(1);
    expect(setFilters).toHaveBeenCalledWith({ languages: "pl" });
  });
});
