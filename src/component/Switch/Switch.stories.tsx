import type { Meta, StoryObj } from '@storybook/react';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const meta: Meta<typeof Switch> = {
  title: 'Switch',
  tags:['autodocs'],
  component: Switch,
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const BasicSwitch: Story = {
  args:{
    defaultChecked:true,
  } ,
};

export const SwitchSmall: Story = {
    args:{
      defaultChecked:true,
      size:'small',
    } ,
  };

export const SwitchDisabled: Story = {
    args:{
      defaultChecked:true,
      disabled:true,
    } ,
};

export const SwitchText: Story = {
    args:{
      checkedChildren:'Light',
      unCheckedChildren:"Dark",
      defaultChecked:true,
    } ,
};

export const SwitchIcon: Story = {
    args:{
      checkedChildren:<CheckOutlined />,
      unCheckedChildren:<CloseOutlined />,
      defaultChecked:true,
    } ,
};
export const SwitchLoading: Story = {
    args:{
      loading:true,
      defaultChecked:true,
    } ,
};