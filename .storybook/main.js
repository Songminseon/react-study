const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: async config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@Assets': path.resolve(__dirname, '../src/assets'),
      '@Components': path.resolve(__dirname, '../src/components'),
      '@Constants': path.resolve(__dirname, '../src/constants'),
      '@Layouts': path.resolve(__dirname, '../src/layouts'),
      '@Pages': path.resolve(__dirname, '../src/pages'),
      '@Utils': path.resolve(__dirname, '../src/utils'),
      '@Actions': path.resolve(__dirname, '../src/actions'),
      '@Reducers': path.resolve(__dirname, '../src/reducers'),
      '@Hooks': path.resolve(__dirname, '../src/hooks'),
    };
    return config;
  },
};
