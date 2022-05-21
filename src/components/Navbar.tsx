import { auth } from '@/firebase';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { Container, HStack, Heading, Box, Link, Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from '@chakra-ui/react';
import { useAuthState } from "react-firebase-hooks/auth";
import NextLink from "next/link";
import React from 'react';
import { signOut } from 'firebase/auth';

const Navbar = () => {
  const [user, loading] = useAuthState(auth);

  return (
    <Container maxW="container.lg">
      <HStack mx="auto" maxWidth={"70rem"} mt="6" justifyContent="space-between">
        <NextLink href="/"><Heading cursor="pointer" as="h1">MyBook</Heading></NextLink>
        <Box>
          {loading && <Spinner />}
          {!loading && user && <Menu>
            <MenuButton fontSize={{ base: "sm", md: "md" }} p={{ base: 2, md: 4 }} as={Button} rightIcon={<ChevronDownIcon />}>
              {user.displayName || "Anonymous"}
            </MenuButton>
            <MenuList>
              <NextLink href="/favorite-books"><MenuItem>Favorite books</MenuItem></NextLink>
              <MenuItem onClick={() => signOut(auth)}>Logout</MenuItem>
            </MenuList>
          </Menu>}
          {!loading && !user && <NextLink href="/login">
            <Link>Login</Link>
          </NextLink>}
        </Box>
      </HStack>
    </Container>
  );
};

export default Navbar;