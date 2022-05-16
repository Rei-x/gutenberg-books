import { Box, Button, Container, Heading, HStack, Input, Link, VStack, Text, Select, Spinner, Image, Wrap } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from "next/link";
import { useMemo, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import { useDebounce } from "use-debounce";
import BookList from '../components/BookList';
import BookView from '../components/BookView';
import Filters from '../components/Filters';
import Layout from '../components/Layout';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import useBooks from '@/hooks/useBooks';

const Home: NextPage = () => {
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>();
  const booksQuery = useBooks({ search });

  return (
    <Layout>
      <Container mt={3} mb={5}>
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
