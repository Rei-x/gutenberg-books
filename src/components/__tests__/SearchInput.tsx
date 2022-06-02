import { faker } from "@faker-js/faker";
import { act, fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import SearchInput from "@/components/SearchInput";

test("Search input updates text", async () => {
  const onChange = jest.fn();
  jest.useFakeTimers();

  render(<SearchInput value={""} setValue={onChange} />);
  expect(onChange).toHaveBeenCalledTimes(1);

  const searchValue = faker.random.words(5);

  act(() => {
    fireEvent.change(screen.getByTestId("search"), {
      target: {
        value: searchValue
      }
    });
    jest.advanceTimersByTime(700);
  });
  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenCalledWith(searchValue);
});
