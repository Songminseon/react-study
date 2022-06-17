import React from 'react';
import styled from 'styled-components';

const CustomInput = styled.input`
  background-color: rgb(245, 245, 245);
  border: none;
  border-radius: 5px;
  width: 100%;
  padding: 0px;

  &::placeholder {
    color: white;
  }
`;

const Input = (props: any) => {
  return <CustomInput {...props} />;
};

export default Input;
