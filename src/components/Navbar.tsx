import { auth } from '@/firebase';
import { Container, HStack, Heading, Box, Link } from '@chakra-ui/react';
import NextLink from "next/link";
import React from 'react';

const Navbar = () => {


  return (
    <Container maxW="container.lg">
      <HStack mx="auto" maxWidth={"70rem"} mt="6" justifyContent="space-between">
        <NextLink href="/"><Heading cursor="pointer" as="h1">Gutenberg books</Heading></NextLink>
        <Box>
          {auth.currentUser ? <NextLink href={`/user/${auth.currentUser.uid}`}>
            <Link>{auth.currentUser.displayName}</Link>
          </NextLink> : <NextLink href="/login">
            <Link>Login</Link>
          </NextLink>}

        </Box>
      </HStack>
    </Container>
  );
};

export default Navbar;