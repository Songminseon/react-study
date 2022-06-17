import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Input from './Input';

test('input 테스트', () => {
  render(<Input />);
});
