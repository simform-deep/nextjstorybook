import type { Meta, StoryObj } from '@storybook/react';

import { Divider  } from 'antd';
import { Children } from 'react';

const meta: Meta<typeof Divider > = {
  title: 'Divider ',
  tags:['autodocs'],
  component: Divider ,
};

export default meta;

type Story = StoryObj<typeof Divider >;

export const SimpleDivider: Story = {
  args:{
    
  } ,
};

export const DividerDashed : Story = {
    args:{
      type:'dashed'
    } ,
};

export const DividerText : Story = {
    args:{
      children:'Text'
    } ,
};

export const DividerTextLeft : Story = {
    args:{
        children:'Text Left',
        orientation:'left',
        plain:true,
    } ,
};

export const DividerTextRight : Story = {
    args:{
        children:'Text Right',
        orientation:'right',
        plain:true,
    } ,
};

export const DividerTextAbsoluteLeft : Story = {
    args:{
        children:'Absolute Left Text',
        orientation:'left',
        orientationMargin:'0',
        plain:true,
    } ,
};

export const DividerTextAbsoluteRight : Story = {
    args:{
        children:'Absolute Right Text',
        orientation:'right',
        orientationMargin:'0',
        plain:true,
    } ,
};