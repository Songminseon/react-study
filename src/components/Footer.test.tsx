import React from 'react';
import { fireEvent, render, screen, cleanup } from '@testing-library/react';

import Footer from './Footer';

afterEach(() => {
  cleanup();
});

test('footer 테스s트', () => {
  render(<Footer />);
});
