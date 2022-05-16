import { getBook } from "./get";
import { listBooks } from "./list";

const booksApi = {
  list: listBooks,
  get: getBook
}

export default booksApi;