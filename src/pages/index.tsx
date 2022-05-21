import { Box, Container } from '@chakra-ui/react';
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
        <SearchInput value={search} setValue={setSearch} />
        <Box mt={1}>
          <Filters setFilters={setFilters} />
        </Box>
        <Box mt={4}>
          <BookList booksQuery={booksQuery} />
        </Box>
      </Container>
    </Layout>

  );
};

export default Home;
