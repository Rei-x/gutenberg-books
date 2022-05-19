import React, { useEffect, useState } from "react";
import { db, auth } from "@/firebase";
import { getDoc, doc, deleteField, setDoc } from "firebase/firestore";
import { useQuery } from "react-query";

const useFavoriteBook = (
  bookId: number
): [boolean | undefined, typeof setFavorite] => {
  const favoriteBookQuery = useQuery("favoriteBooks", async () => {
    const snapshot = await getDoc<Record<string, boolean>>(
      doc(db, `favorites/${auth.currentUser?.uid}`)
    );
    return snapshot.data();
  });
  const [isFavorite, setIsFavorite] = useState<boolean>();

  useEffect(() => {
    if (favoriteBookQuery.data) {
      setIsFavorite(
        Object.keys(favoriteBookQuery.data).includes(bookId.toString())
      );
    }
  }, [bookId, favoriteBookQuery.data]);

  const setFavorite = (isFavorite: boolean) => {
    if (isFavorite) {
      setDoc(
        doc(db, `favorites/${auth.currentUser?.uid}`),
        {
          [bookId]: true,
        },
        { merge: true }
      );
    } else {
      setDoc(
        doc(db, `favorites/${auth.currentUser?.uid}`),
        {
          [bookId]: deleteField(),
        },
        { merge: true }
      );
    }
    favoriteBookQuery.refetch();
  };

  return [isFavorite, setFavorite];
};

export default useFavoriteBook;
