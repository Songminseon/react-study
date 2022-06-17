import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import MainLayout from '@Layouts/MainLayout';
import LoginModal from '@Components/Modal/LoginModal';
import axios from 'axios';

const Index = () => {
  // const user = useSelector((state: any) => state.userReducer);
  // const { name, imgUrl } = user;

  // useEffect(() => {
  //   const fetchData = async () => {
  //     axios.defaults.withCredentials = true;
  //     const result = await axios('/api/test');
  //     // const result = await axios('/api/home/movie?page=3&size=3');
  //     console.log(result);
  //   };
  //   fetchData();
  // }, []);
  return (
    <MainLayout>
      <div>
        {/* <p>
          name: <span>{name}</span>
        </p>
        <img src={imgUrl} alt="." /> */}
      </div>
    </MainLayout>
  );
};

export default Index;
