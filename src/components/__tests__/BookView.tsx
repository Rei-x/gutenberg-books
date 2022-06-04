import React from "react";
import { act, render, screen } from "@testing-library/react";
import { faker } from "@faker-js/faker";
import BookView from "@/components/BookView";
import Providers from "@/components/Providers";
import {
  Agent,
  AgentType,
  Book,
  Resource,
  ResourceType,
  ResultType,
} from "@/types/booksGet";

jest.mock("react-firebase-hooks/auth", () => ({
  useAuthState: jest.fn().mockReturnValue([]),
}));

test("Renders book view", () => {
  const author: Agent = {
    type: AgentType.Author,
    id: parseInt(faker.random.numeric(4)),
    person: faker.name.findName(),
  };

  const image: Resource = {
    type: ResourceType.ImageJPEG,
    id: parseInt(faker.random.numeric(4)),
    uri: `${faker.image.lorempicsum.imageUrl(200, 280)}?medium.jpg`,
  };

  const book: Book = {
    id: parseInt(faker.random.numeric(4)),
    type: ResultType.Text,
    title: faker.lorem.words(3),
    description: null,
    downloads: parseInt(faker.random.numeric(4)),
    license: "",
    subjects: [],
    bookshelves: [],
    languages: [],
    agents: [author],
    resources: [image],
  };

  render(<BookView book={book} />, { wrapper: Providers });

  expect(screen.queryByText(book.title)).toBeInTheDocument();
  expect(screen.queryByText(`Author: ${author.person}`)).toBeInTheDocument();
  expect(screen.queryByAltText("Cover of the book")).toHaveAttribute(
    "src",
    image.uri
  );
  expect(
    screen.queryByText(`Downloads: ${book.downloads.toString()}`)
  ).toBeInTheDocument();
});
