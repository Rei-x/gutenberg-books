import React, { useEffect, useState } from "react";
import { db, auth } from "@/firebase";
import { doc, deleteField, setDoc } from "firebase/firestore";
import useFavoriteBooks from "./useFavoriteBooks";

const useFavoriteBook = (
  bookId: string
): [boolean | undefined, typeof setFavorite] => {
  const [favoriteBooks, reloadFavoriteBooks] = useFavoriteBooks();
  const [isFavorite, setIsFavorite] = useState<boolean>();

  useEffect(() => {
    if (favoriteBooks) {
      setIsFavorite(
        Boolean(favoriteBooks.find((favoriteBookId) => favoriteBookId === bookId))
      );
    }
  }, [bookId, favoriteBooks]);

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
    reloadFavoriteBooks();
  };

  return [isFavorite, setFavorite];
};

export default useFavoriteBook;
