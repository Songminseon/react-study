import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import Content from "@Pages/Content";
import Main from "@Pages/Main";
import Mypage from "@Pages/Mypage";

const pageList = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/content",
    component: Content,
  },
  {
    path: "/mypage",
    component: Mypage,
  },
];

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {pageList.map((item) => (
          <Route path={item.path} element={item.component()} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
