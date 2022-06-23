import React from 'react';
import { ComponentStory } from '@storybook/react';

import ContentCard from './ContentCard';

export default {
  title: 'pages/content/contentCard',
  component: ContentCard,
};

const Template: ComponentStory<typeof ContentCard> = args => <ContentCard {...args} />;

export const Default = Template.bind({
  rank: 1,
  title: '마녀',
  posterImg:
    'https://an2-img.amz.wtchn.net/image/v2/A_2H7CpybTzRqcjyuIGjew.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5URTFOREEzTWpReU5qRTJNemsxTkRZaWZRLmkxX1BMT2hqUGxQSzlWYVZPdVN2QUJ4eW0ydDBCbGpiaGQ2cWxRUTZubEE',
  year: '2020',
  nation: '한국',
});

export const 넘치는경우 = Template.bind({});
