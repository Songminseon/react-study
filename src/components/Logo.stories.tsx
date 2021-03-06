import React from 'react';
import { Story } from '@storybook/react';
import Logo from './Logo';

export default {
  title: 'components/Logo',
  component: Logo,
};

const Template: Story = args => <Logo {...args} />;

export const Default = Template.bind({});
