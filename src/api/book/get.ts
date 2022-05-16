import { Book } from "@/types/booksGet";
import { url } from "@/api/config";

export const getBook = async (id: string): Promise<Book> => {
  const data = await fetch(`${url}/book/${id}`);
  return data.json() as unknown as Promise<Book>;
};
