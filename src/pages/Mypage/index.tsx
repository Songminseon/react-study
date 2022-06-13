import React from 'react';
import MainLayout from '@Layouts/MainLayout';
import { useSelector } from 'react-redux';

const Index = () => {
  const user = useSelector((state: any) => state.userReducer);
  const { name, imgUrl } = user;
  return (
    <MainLayout>
      <div>
        <p>
          name: <span>{name}</span>
        </p>
        <img src={imgUrl} alt="." />
      </div>
    </MainLayout>
  );
};

export default Index;
