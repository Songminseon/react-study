import React from 'react';
import styled from 'styled-components';

import Logo from '@Components/Logo';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  width: 100%;
  height: 60px;

  p {
    margin: 0;
  }
`;

const Navigaiton = () => {
  return (
    <Wrapper>
      <Logo />
      <Link to={'/'}>영화</Link>
      <Link to={'/'}>TV</Link>
      <Link to={'/mypage'}>마이페이지</Link>
    </Wrapper>
  );
};

export default Navigaiton;
