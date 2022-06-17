import React from 'react';

import Navigaiton from '@Components/Navigation';
import Footer from '@Components/Footer';

type Props = {
  children: JSX.Element;
};

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <Navigaiton />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
