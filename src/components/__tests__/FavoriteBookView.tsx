import "whatwg-fetch";
import React from "react";
import { render } from "@testing-library/react";
import FavoriteBookView from "../FavoriteBookView";
import Providers from "../Providers";
import { server } from "@/mocks/server";

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn().mockReturnValue([]),
}));

test("Gets book by id and renders it", async () => {
  render(<FavoriteBookView bookId={"1"} />, { wrapper: Providers });
});
