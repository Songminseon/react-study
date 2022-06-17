import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Search from './Search';

afterEach(() => {
  cleanup();
});

test('Logo 테스트', () => {
  render(<Search />);
});
