import React, { useState } from 'react';
import MainLayout from '@Layouts/MainLayout';
import Input from '@Components/Input';

const Index = () => {
  const [a, setA] = useState('');
  const onChangeA = (e: React.ChangeEvent<HTMLInputElement>) => {
    setA(e.target.value);
  };
  return (
    <MainLayout>
      <div>
        <Input value={a} onChange={onChangeA} placeholder="1" />
        <p>Main pasge</p>
      </div>
    </MainLayout>
  );
};

export default Index;
