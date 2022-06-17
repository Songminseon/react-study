import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Logo from './Logo';

afterEach(() => {
  cleanup();
});

test('Logo 테스트', () => {
  render(<Logo />);
});
