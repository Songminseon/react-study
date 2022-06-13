import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@Constants/colors';

const SearchWrapper = styled.div`
  width: 300px;
  height: 38px;
  background-color: ${COLORS.grey_f5};
  border-radius: 5px;
`;

const Search = () => {
  return (
    <SearchWrapper>
      <p>search</p>
    </SearchWrapper>
  );
};

export default Search;
