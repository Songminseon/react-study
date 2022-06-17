import React from 'react';
import { Story } from '@storybook/react';

import ContentCard from './ContentCard';

export default {
  title: 'pages/content/contentCard',
  component: ContentCard,
};

const Template: Story = args => <ContentCard {...args} />;

export const Default = Template.bind({});
export const 넘치는경우 = Template.bind({});
