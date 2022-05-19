import React from "react";
import { db, auth } from "@/firebase";
import { getDoc, doc } from "firebase/firestore";
import { useQuery } from "react-query";

const useFavoriteBooks = (): [
  string[] | undefined,
  typeof favoriteBookQuery.refetch
] => {
  const favoriteBookQuery = useQuery("favoriteBooks", async () => {
    const snapshot = await getDoc<Record<string, boolean>>(
      doc(db, `favorites/${auth.currentUser?.uid}`)
    );
    return snapshot.data();
  });

  const favoriteBooks = Object.keys(favoriteBookQuery?.data || {});

  return [favoriteBooks, favoriteBookQuery.refetch];
};

export default useFavoriteBooks;
