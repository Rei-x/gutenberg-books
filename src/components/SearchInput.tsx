import { chakra, Input } from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';

const SearchInput = chakra(({ value, setValue, className }: { value: string, setValue: Dispatch<SetStateAction<string>>; className?: string }) => {
  const [search, setSearch] = useState(value);
  const [debouncedValue] = useDebounce(search, 700);

  useEffect(() => {
    setValue(debouncedValue);
  }, [debouncedValue, setValue]);

  return (
    <Input className={className} placeholder="Search for your book!" value={search} onChange={(e) => setSearch(e.target.value)} />
  );
});

export default SearchInput;