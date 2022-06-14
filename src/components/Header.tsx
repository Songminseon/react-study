import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@Constants/colors';

const CustomHead = styled.h1`
  color: ${COLORS.black_29};
  font-size: 22px;
  font-weight: 700;
`;

interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return <CustomHead>{name}</CustomHead>;
};

export default Header;
