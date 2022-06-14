import React from 'react';
import { Story, ComponentStory } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: 'minseon',
  onClick: () => alert('1'),
};
