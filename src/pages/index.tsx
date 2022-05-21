import { Box, Container, VStack } from '@chakra-ui/react';
import type { NextPage } from 'next';
import React, { useState } from 'react';
import BookList from '../components/BookList';
import Filters from '../components/Filters';
import Layout from '../components/Layout';
import SearchInput from '../components/SearchInput';
import useBooks from '@/hooks/useBooks';

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>();
  const booksQuery = useBooks({ search, filters });

  return (
    <Layout>
      <Container maxW="container.lg" mt={3} mb={5}>
        <VStack mt={1} mb={5}>
          <Box width="100%" maxWidth="lg">
            <SearchInput value={search} setValue={setSearch} />
            <Filters setFilters={setFilters} />
          </Box>
        </VStack>
        <Box mt={4}>
          <BookList booksQuery={booksQuery} />
        </Box>
      </Container>
    </Layout>

  );
};

export default Home;
