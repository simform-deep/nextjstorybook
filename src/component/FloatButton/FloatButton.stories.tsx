import type { Meta, StoryObj } from '@storybook/react';
import { QuestionCircleOutlined, CustomerServiceOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd';

const meta: Meta<typeof FloatButton> = {
  title: 'FloatButton',
  tags:['autodocs'],
  component: FloatButton,
};

export default meta;

type Story = StoryObj<typeof FloatButton>;

export const basic: Story = {
  args:{
    
  } ,
};

export const Type: Story = {
    args:{
        icon:<QuestionCircleOutlined />,
        type:"primary",
        style:{right: 24},
    } ,
};

export const Shap: Story = {
    args:{
        icon:<CustomerServiceOutlined />,
        shape:"square",
        type:"primary",
    } ,
};

export const Badge: Story = {
    args:{
        icon:<CustomerServiceOutlined />,
        shape:"circle",
        badge:({ count: 5 }),
    } ,
};