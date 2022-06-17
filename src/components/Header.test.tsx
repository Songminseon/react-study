import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Header from './Header';

afterEach(() => {
  cleanup();
});

test('Header 테스트', () => {
  const headerName = 'test';
  render(<Header name={headerName} />);
  expect(screen.getByText(headerName)).toBeInTheDocument();
});
