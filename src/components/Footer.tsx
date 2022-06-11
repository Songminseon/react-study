import React from 'react';
import styled from 'styled-components';

import { COLORS } from '@Constants/colors';

const FooterWrapper = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${COLORS.black_1c};
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <p>footer</p>
    </FooterWrapper>
  );
};

export default Footer;
