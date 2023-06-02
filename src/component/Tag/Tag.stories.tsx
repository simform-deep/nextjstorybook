import type { Meta, StoryObj } from '@storybook/react';
import { TwitterOutlined } from '@ant-design/icons';
import { Tag } from 'antd';


const meta: Meta<typeof Tag> = {
  title: 'Tag',
  tags:['autodocs'],
  component: Tag,
};

export default meta;

type Story = StoryObj<typeof Tag>;

export const BasicTag: Story = {
  args:{
    children:'Tag'
  } ,
};

export const LinkTag: Story = {
    args:{
        children:<a href='https://www.google.com/maps'>Link Tag</a>,
    } ,
};

export const ClosableTag: Story = {
    args:{
      closable:true,
      children:'closable Tag'
    } ,
};

export const ColorfulTag: Story = {
    args:{
        color:"magenta",
        children:'magenta'
    } ,
};

export const CustomColorfulTag: Story = {
    args:{
        color:"#f00",
        children:'Red'
    } ,
};

export const IconTag: Story = {
    args:{
        icon:<TwitterOutlined/>,
        color:"#55acee",
        children:'Twitter',
    } ,
};

export const borderLessTag: Story = {
    args:{
        color:"magenta",
        children:'magenta',
        bordered:false,
    } ,
};