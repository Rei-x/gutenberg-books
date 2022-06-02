import React from "react";
import { render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import BookView from "@/components/BookView";
import Providers from "@/components/Providers";
import { AgentType, Book, ResultType } from "@/types/booksGet";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }))
  });
});

test("Renders book view", () => {
  jest.spyOn(console, "error").mockImplementation(() => { });
  const book: Book = {
    id: 23,
    type: ResultType.Text,
    title: "Title",
    description: null,
    downloads: parseInt(faker.random.numeric(4)),
    license: "",
    subjects: [],
    bookshelves: [],
    languages: [],
    agents: [
      { type: AgentType.Author, id: 12, person: faker.name.findName() }
    ],
    resources: []
  };
  render(<BookView book={book} />, { wrapper: Providers });
  expect(screen.getByTestId("title")).toHaveTextContent(book.title);
  expect(screen.getByTestId("author")).toHaveTextContent(book.agents[0].person);
  expect(screen.getByTestId("downloads")).toHaveTextContent(book.downloads.toString());
});