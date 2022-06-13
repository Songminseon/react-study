import React from 'react';
import { Story } from '@storybook/react';
import Navigation from './Navigation';

export default {
  title: 'Navigation',
  component: Navigation,
};

const Template: Story = args => <Navigation {...args} />;

export const Default = Template.bind({});
