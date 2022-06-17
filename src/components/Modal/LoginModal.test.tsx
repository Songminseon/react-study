import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import LoginModal from './LoginModal';

afterEach(() => {
  cleanup();
});

test('Login Modal 테스트', () => {
  render(<LoginModal />);
});
