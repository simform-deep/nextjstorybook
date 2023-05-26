import type { Meta, StoryObj } from '@storybook/react';

import { Button } from 'antd';

const meta: Meta<typeof Button> = {
  title: 'Button',
  tags:['autodocs'],
  component: Button,
  args:{
    children: "Button"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args:{
    children: 'Primary Button',
    type: 'primary',
    className: 'iconBtn',
  } ,
};

export const Secondary: Story = {
  args:{
    type:'default',
    children: 'Secondary Button',
  } ,
};

export const Disabled: Story = {
  args:{
    disabled: true,
    children: 'Disabled Button',
  } ,
};

export const Large: Story = {
  args:{
    size: 'large',
    children: 'Large Button',
  } ,
};

export const Small: Story = {
  args:{
    size: 'small',
    children: 'Small Button',
  } ,
};