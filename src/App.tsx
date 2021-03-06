import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import Content from '@Pages/ContentDetail';
import Main from '@Pages/Main';
import Mypage from '@Pages/Mypage';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }
  html {
    overflow: auto;
  }
  body {
    margin: 0;
  }
`;

const pageList = [
  {
    path: '/',
    component: Main,
  },
  {
    path: '/content',
    component: Content,
  },
  {
    path: '/mypage',
    component: Mypage,
  },
  {
    path: '*',
    component: Main,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {pageList.map(item => (
          <Route key={item.path} path={item.path} element={item.component()} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
