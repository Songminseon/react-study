import React from 'react';
import { Story } from '@storybook/react';
import SignupModal from './SignupModal';

export default {
  title: 'components/modal/SignupModal',
  component: SignupModal,
};

const Template: Story = args => <SignupModal {...args} />;

export const Default = Template.bind({});
