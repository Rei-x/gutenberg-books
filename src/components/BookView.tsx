import { HStack, Box, Heading, Link, Image, Text } from '@chakra-ui/react';
import NextLink from "next/link";
import React from 'react';
import { Book, ResourceType } from '@/types/booksGet';
import { StarIcon } from '@chakra-ui/icons';
import { auth, db } from '@/firebase';
import { addDoc, collection, deleteDoc, deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useQuery, useQueryClient } from 'react-query';

const getImageFromBook = (book: Book) => {
  return book.resources.find((resource) => resource.type === ResourceType.ImageJPEG && resource.uri.endsWith("medium.jpg"))?.uri;
};

const getAuthorFromBook = (book: Book) => {
  return book.agents.find((agent) => agent.type === "Author")?.person;
};

const BookView = ({ book }: { book: Book; }) => {
  const favoriteBookQuery = useQuery("favoriteBooks", async () => {
    const snapshot = await getDoc<Record<string, boolean>>(doc(db, `favorites/${auth.currentUser?.uid}`));
    return snapshot.data();
  });
  const queryClient = useQueryClient();

  return (
    <HStack alignItems="flex-start" key={book.id} width={"100%"}>
      <Box width="30%">
        <Link>
          <NextLink href={`/book/${book.id}`}>
            <Image src={getImageFromBook(book)} alt={`Cover of the book`} />
          </NextLink>
        </Link>
      </Box>
      <Box width="70%">
        <div>
          <Link>
            <NextLink href={`/book/${book.id}`}>
              <Heading as="h2" size="md">{book.title}</Heading>
            </NextLink>
          </Link>
          <Text>Downloads: {book.downloads}</Text>
          <Text>Author: {getAuthorFromBook(book)}</Text>
        </div>
        {Object.keys(favoriteBookQuery.data || {}).includes(book.id.toString()) ?
          <HStack mt={4} cursor="pointer" onClick={() => {
            updateDoc(doc(db, `favorites/${auth.currentUser?.uid}`), {
              [book.id]: deleteField()
            });
            queryClient.invalidateQueries("favoriteBooks");
          }} >
            <Link textAlign="center" as="p">Unmark as favorite </Link><StarIcon color="yellow.400" />
          </HStack> : <HStack mt={4} cursor="pointer" onClick={() => {
            setDoc(doc(db, `favorites/${auth.currentUser?.uid}`), {
              [book.id]: true
            }, { merge: true });
            queryClient.invalidateQueries("favoriteBooks");
          }} >
            <Link textAlign="center" as="p">Mark as favorite </Link><StarIcon color="gray.400" />
          </HStack>}



      </Box>
    </HStack>
  );
};

export default BookView;