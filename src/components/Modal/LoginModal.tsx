import React from 'react';
import styled from 'styled-components';

import Logo from '@Components/Logo';
import Input from '@Components/Input';
import Button from '@Components/Button';
import CenterLayout from '@Layouts/CenterLayout';

const ModalWrapper = styled.div`
  width: 375px;
  padding: 32px 0px 16px 0px;
  background-color: white;

  .modal-head {
    font-size: 17px;
    font-weight: 500;
    margin: 0px;
  }

  section {
    margin: 0px 20px;
  }
`;

const LoginModal = () => {
  return (
    <ModalWrapper>
      <CenterLayout style={{ marginBottom: '14px' }}>
        <Logo />
      </CenterLayout>
      <CenterLayout>
        <h2 className="modal-head">로그인</h2>
      </CenterLayout>
      <section>
        <Input />
        <Input />
        <Button name={'로그인'} onClick={() => alert('!')} isFull={true} type="main" />
      </section>
    </ModalWrapper>
  );
};

export default LoginModal;
