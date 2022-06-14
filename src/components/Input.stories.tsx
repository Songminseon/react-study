import React from 'react';
import { Story } from '@storybook/react';
import Input from './Input';

export default {
  title: 'components/Input',
  component: Input,
};

const Template: Story = args => <Input {...args} />;

export const Default = Template.bind({});
