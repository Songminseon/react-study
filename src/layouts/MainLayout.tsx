import React from 'react';
import styled from 'styled-components';

import Navigaiton from '@Components/Navigation';
import Footer from '@Components/Footer';

const Layout = styled.div``;

type Props = {
  children: JSX.Element;
};

const MainLayout = ({ children }: Props) => {
  return (
    <Layout>
      <Navigaiton />
      {children}
      <Footer />
    </Layout>
  );
};

export default MainLayout;
