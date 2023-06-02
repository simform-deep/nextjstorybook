import type { Meta, StoryObj } from '@storybook/react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const meta: Meta<typeof Spin> = {
  title: 'Spin',
  tags:['autodocs'],
  component: Spin,
};

export default meta;

type Story = StoryObj<typeof Spin>;

export const Basic: Story = {};


export const LargeSize: Story = {
    args:{
      size:'large'
    } ,
};

export const SmallSize: Story = {
    args:{
      size:'small'
    } ,
};


export const LoadingText: Story = {
    args:{
      tip:'Loading...',
      children:<div className="content" />,
    } ,
};

 
export const CustomSpinning: Story = {
    args:{
      indicator:(antIcon),
    } ,
};