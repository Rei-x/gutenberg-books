import { act, fireEvent, render, screen } from "@testing-library/react";
import SearchInput from "../SearchInput";

beforeEach(() => {
  jest.useFakeTimers();
});

test("Search input updates text", async () => {
  const onChange = jest.fn();
  jest.useFakeTimers();

  render(<SearchInput value={""} setValue={onChange} />);

  act(() => {
    fireEvent.change(screen.getByTestId("search"), {
      target: {
        value: "hello"
      }
    });
    jest.advanceTimersByTime(700);
  });

  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onChange).toHaveBeenCalledWith("hello");
});
