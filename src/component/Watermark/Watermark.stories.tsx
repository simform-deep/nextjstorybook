import type { Meta, StoryObj } from '@storybook/react';

import { Watermark, Button } from 'antd';

const meta: Meta<typeof Watermark> = {
  title: 'Watermark',
  tags:['autodocs'],
  component: Watermark,
};

export default meta;

type Story = StoryObj<typeof Watermark>;

export const Basic: Story = {
  args:{
    content:'Ant Design',
    children:<div style={{height:'500px'}} />,
  } ,
};

export const MultiLine: Story = {
    args:{
      content:(['Ant Design', 'Happy Working']),
      children:<div style={{height:'500px'}} />,
    } ,
};


export const Image: Story = {
    args:{
      height:30,
      width:130,
      image:"https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*lkAoRbywo0oAAAAAAAAAAAAADrJ8AQ/original",
      children:<div style={{height:'500px'}} />,
    } ,
};

