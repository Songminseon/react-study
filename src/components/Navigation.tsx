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

import { COLORS } from '@Constants/colors';

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
    margin-right: 16px;
    list-style: none;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: white;
    color: ${COLORS.grey_7e};
    font-size: 15px;
    font-weight: 500;
  }

  .search-wrapper {
    margin-left: auto;
    margin-right: 16px;
  }
`;

const Navigaiton = () => {
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
          <button onClick={() => moveRouter('/?domain=movie')}>영화</button>
        </li>
        <li>
          <button onClick={() => moveRouter('/?domain=tv')}>TV</button>
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
          <Button name={'회원가입'} onClick={() => dispatch(updateUser())} />
        </>
      )}
    </Wrapper>
  );
};

export default Navigaiton;
