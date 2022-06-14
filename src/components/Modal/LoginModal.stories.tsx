import React from 'react';
import { Story } from '@storybook/react';
import LoginModal from './LoginModal';

export default {
  title: 'components/modal/LoginModal',
  component: LoginModal,
};

const Template: Story = args => <LoginModal {...args} />;

export const Default = Template.bind({});
