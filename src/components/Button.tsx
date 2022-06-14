import React from 'react';
import styled, { css, CSSProp } from 'styled-components';

const CustomButton = styled.button<{ typeStyle: CSSProp }>`
  ${props => props.typeStyle};
  cursor: pointer;
  margin: 0px;
  background-color: white;

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
};

interface Props {
  name: string;
  onClick: () => void;
  type?: ButtonType;
}

type ButtonType = 'primary' | 'border';

const Button = ({ name, onClick, type = 'primary' }: Props) => {
  const typeStyle = TYPE[type];

  return (
    <CustomButton onClick={onClick} typeStyle={typeStyle}>
      <span>{name}</span>
    </CustomButton>
  );
};

export default Button;
