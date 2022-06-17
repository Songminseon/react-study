import React from 'react';
import styled from 'styled-components';

const Layout = styled.div``;

type Props = {
  children: JSX.Element;
};

const ContentListLayout = ({ children }: Props) => {
  return <Layout>{children}</Layout>;
};

export default ContentListLayout;
