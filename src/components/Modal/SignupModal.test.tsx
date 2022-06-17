import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import SignupModal from './SignupModal';

afterEach(() => {
  cleanup();
});

test('Login Modal 테스트', () => {
  render(<SignupModal />);
});
