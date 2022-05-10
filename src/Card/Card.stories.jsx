import React from 'react';

import Card from './Card';

export default {
  title: 'MyLibrary/Card',
  component: Card,
};

const Template = (args) => (
  <div className="container">
    <Card {...args} />
  </div>
);


export const Default = Template.bind({});

Default.args = {
  title: 'Some title',
  tag: 'Food',
  description: 'Here is some description',
  author: 'Julia',
  date: '10.05.2022'
};
