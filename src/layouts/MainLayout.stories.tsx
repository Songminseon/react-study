import React from 'react';
import styled from 'styled-components';
import { ComponentStory } from '@storybook/react';
import MainLayout from './MainLayout';

export default {
  title: 'layout/MainLayout',
  component: MainLayout,
};

const Template: ComponentStory<typeof MainLayout> = args => <MainLayout {...args} />;

export const Primary = Template.bind({});

const DummyWrapper = styled.div`
  width: 100%;
  height: 500px;

  p {
    margin: auto;
    font-size: 30px;
    font-weight: 500;
  }
`;

const dummyComponent = () => {
  return (
    <DummyWrapper>
      <p>hello</p>
    </DummyWrapper>
  );
};

Primary.args = {
  children: dummyComponent(),
};
