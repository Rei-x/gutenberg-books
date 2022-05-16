import React from "react";
import { useInfiniteQuery } from "react-query";
import api from "@/api";
import { ListBooks } from "@/types/booksGet";

const useBooks = ({ search }: { search: string }) => {
  return useInfiniteQuery<ListBooks>(
    ["book", search],
    api.book.list({ search }),
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
