import "whatwg-fetch";
import React from "react";
import { render, screen } from "@testing-library/react";
import FavoriteBookView from "../FavoriteBookView";
import Providers from "../Providers";

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn().mockReturnValue([]),
}));

test("Gets book by id and renders it", async () => {
  const getTextFromTestId = async (testId: string) => {
    return (await screen.findByTestId(testId)).textContent;
  };

  render(<FavoriteBookView bookId={"1"} />, { wrapper: Providers });

  expect(await getTextFromTestId("downloads")).toMatchInlineSnapshot(
    `"Downloads: 512"`
  );
  expect(await getTextFromTestId("title")).toMatchInlineSnapshot(
    `"The Declaration of Independence of the United States of Amer..."`
  );
  expect(await getTextFromTestId("author")).toMatchInlineSnapshot(
    `"Author: Jefferson, Thomas"`
  );
});
