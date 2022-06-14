import React from 'react';
import { ComponentStory } from '@storybook/react';
import Header from './Header';

export default {
  title: 'components/Header',
  component: Header,
};

const Template: ComponentStory<typeof Header> = args => <Header {...args} />;

export const Default = Template.bind({});
export const 박스오피스 = Template.bind({});
export const 왓챠Top10 = Template.bind({});

Default.args = {
  name: '제목',
};

박스오피스.args = {
  name: '박스오피스',
};

왓챠Top10.args = {
  name: '왓챠Top10',
};
