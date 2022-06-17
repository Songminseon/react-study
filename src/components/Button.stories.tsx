import React from 'react';
import { ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'components/Button',
  component: Button,
};

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
export const Border = Template.bind({});
export const Main = Template.bind({});

Primary.args = {
  name: 'primary',
  onClick: action('prmimary clicked'),
  type: 'primary',
};

Border.args = {
  name: 'border',
  onClick: action('border clicked'),
  type: 'border',
};

Main.args = {
  name: 'main',
  onClick: action('main click'),
  type: 'main',
  isFull: true,
};
