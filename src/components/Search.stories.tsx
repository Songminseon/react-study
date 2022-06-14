import React from 'react';
import { Story } from '@storybook/react';
import Search from './Search';

export default {
  title: 'components/Search',
  component: Search,
};

const Template: Story = args => <Search {...args} />;

export const Default = Template.bind({});
