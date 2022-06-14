import React from 'react';
import styled from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../src/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullScreen',
};

export const decorators = [
  Story => (
    <Provider store={store}>
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    </Provider>
  ),
];
