import React from 'react';
import { waitFor, fireEvent, render, screen, cleanup } from '@testing-library/react';

import Button from '@Components/Button';

test('button 테스2트', () => {
  const buttonName = 'test';
  const onClick = jest.fn();
  render(<Button name={buttonName} onClick={onClick} />);
  expect(screen.getByText(buttonName)).toBeInTheDocument();
  fireEvent.click(screen.getByText(buttonName));
  expect(onClick).toBeCalledTimes(1);
});
