import React from 'react';
import { waitFor, fireEvent, render, screen, cleanup } from '@testing-library/react';

import Button from './Button';

afterEach(() => {
  cleanup();
});

test('button 테스트', () => {
  const buttonName = 'test';
  const onClick = jest.fn();
  render(<Button name={buttonName} onClick={onClick} />);
  expect(screen.getByText(buttonName)).toBeInTheDocument();
  fireEvent.click(screen.getByText(buttonName));
  expect(onClick).toBeCalledTimes(1);
});
