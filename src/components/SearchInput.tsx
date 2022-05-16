import { Input } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const SearchInput = ({ value, setValue }: { value: string, setValue: Dispatch<SetStateAction<string>>; }) => {
  const [search, setSearch] = useState(value);
  const [debouncedValue] = useDebounce(search, 700);

  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue, setValue]);

  return (
    <Input placeholder="Search for your book!" value={search} onChange={(e) => setSearch(e.target.value)} />
  );
};

export default SearchInput;