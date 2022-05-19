import { Box, Wrap, Select, Input, Link, Text } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useState } from 'react';

const Filters = ({ setFilters }: { setFilters: Dispatch<SetStateAction<Record<string, string> | undefined>>; }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <Box>
      <Link as="p" width="100%" cursor="pointer" fontWeight={"bold"} onClick={() => setShowFilters(!showFilters)}>Show filters</Link>
      {showFilters && <Wrap borderColor="gray.200" borderWidth="2px" borderStyle="solid" p={3} borderRadius="lg">
        <Box>
          <Text>Language</Text>
          <Select onChange={(e) => setFilters({ languages: e.target.value })} placeholder='All languages'>
            <option value='en'>English</option>
            <option value='pl'>Polish</option>
          </Select>
        </Box>
      </Wrap>}
    </Box>
  );
};

export default Filters;