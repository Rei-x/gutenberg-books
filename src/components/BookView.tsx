import { HStack, Box, Heading, Link, Image, Text } from '@chakra-ui/react';
import NextLink from "next/link";
import React from 'react';
import { Book, ResourceType } from '@/types/booksGet';
import { StarIcon } from '@chakra-ui/icons';
import { auth, db } from '@/firebase';
import { addDoc, collection, deleteDoc, deleteField, doc, getDoc, setDoc, updateDoc } from 'firebase/firestore';
import { useQuery, useQueryClient } from 'react-query';
import MarkAsFavorite from './MarkAsFavorite';

const getImageFromBook = (book: Book) => {
  return book.resources.find((resource) => resource.type === ResourceType.ImageJPEG && resource.uri.endsWith("medium.jpg"))?.uri;
};

const getAuthorFromBook = (book: Book) => {
  return book.agents.find((agent) => agent.type === "Author")?.person;
};

const BookView = ({ book }: { book: Book; }) => {

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
        <MarkAsFavorite bookId={book.id}/>



      </Box>
    </HStack>
  );
};

export default BookView;