import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { loginUser, logoutUser } from '@Actions/authAction';
import { updateUser, deleteUser } from '@Actions/userAction';

import Logo from '@Components/Logo';
import Button from '@Components/Button';
import Search from '@Components/Search';

import { useInternalRouter } from '@Hooks/routing';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 60px;
  height: 62px;

  p {
    margin: 0;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    list-style: none;
  }

  .search-wrapper {
    margin-left: auto;
    margin-right: 16px;
  }
`;

const Navigation = () => {
  const router = useInternalRouter();
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.authReducer);

  const moveRouter = (url: string) => {
    router.push(url);
  };

  const onClickLogin = () => {
    dispatch(loginUser());
    dispatch(updateUser());
  };

  const onClickLogout = () => {
    dispatch(logoutUser());
    dispatch(deleteUser());
  };

  return (
    <Wrapper>
      <Link to={'/'}>
        <Logo />
      </Link>
      <ul>
        <li>
          <Button name={'영화'} onClick={() => moveRouter('/?domain=movie')} />
        </li>
        <li>
          <Button name={'TV'} onClick={() => moveRouter('/?domain=tv')} />
        </li>
      </ul>
      <div className="search-wrapper">
        <Search />
      </div>
      {auth ? (
        <>
          <Button name={'로그아웃'} onClick={onClickLogout} />
          <Button name={'마이페이지'} onClick={() => moveRouter('/mypage')} />
        </>
      ) : (
        <>
          <Button name={'로그인'} onClick={onClickLogin} />
          <Button name={'회원가입'} onClick={() => dispatch(updateUser())} type="border" />
        </>
      )}
    </Wrapper>
  );
};

export default Navigation;
