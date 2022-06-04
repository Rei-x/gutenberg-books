import {
  HStack,
  Box,
  Heading,
  Link,
  Image,
  Text,
  Skeleton,
} from "@chakra-ui/react";
import NextLink from "next/link";
import React, { useMemo } from "react";
import { Book, ResourceType } from "../types/booksGet";
import MarkAsFavorite from "./MarkAsFavorite";
import { motion } from "framer-motion";
import { truncateString } from "../utils/truncateString";
import ImageWithSkeleton from "./ImageWithSkeleton";

const getImageFromBook = (book: Book) => {
  return book.resources.find(
    (resource) =>
      resource.type === ResourceType.ImageJPEG &&
      resource.uri.endsWith("medium.jpg")
  )?.uri;
};

const getAuthorFromBook = (book: Book) => {
  return book.agents.find((agent) => agent.type === "Author")?.person;
};

const BookView = ({ book }: { book: Book }) => {
  const image = useMemo(() => getImageFromBook(book), [book]);

  return (
    <HStack width={["sm", "md"]} alignItems="flex-start" key={book.id}>
      <Box width="30%">
        {image && (
          <NextLink href={`/book/${book.id}`}>
            <Link>
              <ImageWithSkeleton
                src={image}
                width="100%"
                height="13rem"
                alt="Cover of the book"
              />
            </Link>
          </NextLink>
        )}
      </Box>
      <Box width="70%">
        <div>
          <NextLink href={`/book/${book.id}`}>
            <Link>
              <Heading data-testid="title" as="h2" size="md">
                {truncateString(book.title)}
              </Heading>
            </Link>
          </NextLink>
          <Text data-testid="downloads">Downloads: {book.downloads}</Text>
          <Text data-testid="author">Author: {getAuthorFromBook(book)}</Text>
        </div>
        <MarkAsFavorite bookId={book.id.toString()} />
      </Box>
    </HStack>
  );
};

export default React.memo(BookView);
