import { Book, ResultType } from "@/types/booksGet";
import { render, screen } from "@testing-library/react";
import BookView from "../BookView";

test("Renders book view", () => {
  const book: Book = {
    id: 23,
    type: ResultType.Text,
    title: "Title",
    description: null,
    downloads: 24,
    license: "",
    subjects: [],
    bookshelves: [],
    languages: [],
    agents: [],
    resources: []
  };
  render(<BookView book={book} />);
  expect(screen.getByTestId("title")).toContain("Title");
});