/* eslint-disable */
/* prettier-disable */
module.exports = {
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '^@Assets/(.*)$': ['<rootDir>/src/assets$1'],
    '^@Components/(.*)$/': '<rootDir>/src/components/$1',
    '@Constants/(.*)': ['<rootDir>/src/Constants/$1'],
    '^@Layouts/(.*)$/': '<rootDir>/src/layouts/$1',
    '^@Pages/(.*)$/': '<rootDir>/src/pages/$1',
    '^@Utils/(.*)$': '<rootDir>/src/utils$1',
    '^@Actions/(.*)$': '<rootDir>/src/actions$1',
    '^@Reducers/(.*)$': '<rootDir>/src/reducers$1',
    '^@Hooks/(.*)$': '<rootDir>/src/hooks$1',
  },
};
