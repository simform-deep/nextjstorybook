import type { Meta, StoryObj } from '@storybook/react';

import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  tags:['autodocs'],
  component: Carousel,
};


export default meta;

type Story = StoryObj<typeof Carousel>;

export const BasicCarousel: Story = {
  args:{
    autoplay:true,
    children:<div><div>
    <h3 style={contentStyle}>1</h3>
  </div>
  <div>
    <h3 style={contentStyle}>2</h3>
  </div>
  <div>
    <h3 style={contentStyle}>3</h3>
  </div>
  <div>
    <h3 style={contentStyle}>4</h3>
  </div></div>
  } ,
};