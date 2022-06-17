import React from 'react';
import styled, { css, CSSProp } from 'styled-components';
import { COLORS } from '@Constants/colors';

const CustomButton = styled.button<{ typeStyle: CSSProp; isFull: boolean }>`
  ${props => props.typeStyle};
  cursor: pointer;
  margin: 0px;
  background-color: white;
  width: ${props => props.isFull && '100%'};
  height: ${props => props.isFull && '44px'};

  span {
    padding: 5px 14px 6px;
    display: block;
  }
`;

const TYPE = {
  primary: css`
    border: none;
  `,
  border: css`
    border: 1px solid rgba(116, 116, 123, 0.5);
    border-radius: 5px;
  `,
  main: css`
    border: none;
    background-color: ${COLORS.main} !important;
    color: white;
    border-radius: 5px;
    font-weight: 500;
    font-size: 17px;
  `,
};

interface Props {
  name: string;
  onClick: () => void;
  type?: ButtonType;
  isFull?: boolean;
}

type ButtonType = 'primary' | 'border' | 'main';

const Button = ({ name, onClick, type = 'primary', isFull = false }: Props) => {
  const typeStyle = TYPE[type];

  return (
    <CustomButton onClick={onClick} typeStyle={typeStyle} isFull={isFull}>
      <span>{name}</span>
    </CustomButton>
  );
};

export default Button;
