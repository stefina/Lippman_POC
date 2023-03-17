import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Box } from '../Box';
import { IconSearch } from '../Icons/IconSearch';
import { Stack } from '../Stack';
import {
  headerSearchIconWrapperStyle,
  headerSearchInputStyle,
  headerSearchInputWrapperStyle,
  headerSearchLabelStyle,
} from './HeaderSearch.css';

export const HeaderSearch = () => {
  const router = useRouter();
  const search =
    typeof router?.query?.search === 'string'
      ? router?.query?.search || ''
      : '';
  const [term, setTerm] = useState<string>(search);

  useEffect(() => {
    setTerm(search);
  }, [search]);

  return (
    <Stack
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        if (term) {
          router.push(`${router.basePath || '/'}?search=${term}`);
        }
        if (!term) {
          router.push(router.basePath || '/');
        }
      }}
      backgroundColor="white"
      boxShadow="default"
      padding={1}
      gap={2}
      flexDirection="row"
      alignItems="center"
      flexShrink="1"
    >
      <Box
        as="label"
        display={['none', 'block']}
        htmlFor="search-bar"
        className={headerSearchLabelStyle}
      >
        Search:
      </Box>
      <Stack
        flexDirection="row"
        alignItems="center"
        backgroundColor="neutral-100"
        color="neutral-900"
        className={headerSearchInputWrapperStyle}
      >
        <input
          onChange={(e) => setTerm(e.target.value || '')}
          value={term}
          className={headerSearchInputStyle}
          type="search"
          id="search-bar"
          name="search-bar"
        />
        <Box
          as="button"
          flexShrink="0"
          padding={1}
          className={headerSearchIconWrapperStyle}
        >
          <IconSearch />
        </Box>
      </Stack>
    </Stack>
  );
};
