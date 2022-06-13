import React from 'react';
import styled from 'styled-components';

const CustomButton = styled.button``;

interface Props {
  name: string;
  onClick: () => void;
}

const Button = ({ name, onClick }: Props) => {
  return (
    <CustomButton onClick={onClick}>
      <span>{name}</span>
    </CustomButton>
  );
};

export default Button;
