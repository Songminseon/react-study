import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import Footer from './Footer';

afterEach(() => {
  cleanup();
});

test('footer 테스트', () => {
  render(<Footer />);
  expect(screen.getByText('대표 송민선')).toBeInTheDocument();
});
