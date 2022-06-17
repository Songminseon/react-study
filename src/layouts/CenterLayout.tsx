import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type Props = {
  children: JSX.Element;
  style?: object;
};

const CenterLayout = ({ children, style }: Props) => {
  return <Wrapper style={style}>{children}</Wrapper>;
};

export default CenterLayout;
