import React from "react";
import { useInfiniteQuery } from "react-query";
import api from "@/api";
import { ListBooks } from "@/types/booksGet";

const useBooks = (options?: {
  search: string;
  filters?: Record<string, string>;
}) => {
  return useInfiniteQuery<ListBooks>(
    [
      "book",
      options?.search === "" ? undefined : options?.search,
      options?.filters,
    ],
    api.book.list({
      search: options?.search,
      languages: options?.filters?.languages,
    }),
    {
      getNextPageParam: (lastPage) => {
        if (!lastPage.next) return false;
        const url = new URL(lastPage.next);
        const searchParams = url.searchParams;
        return searchParams.get("page");
      },
    }
  );
};

export default useBooks;
