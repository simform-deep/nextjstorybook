import type { Meta, StoryObj } from '@storybook/react';
import { SmileOutlined, DownOutlined } from '@ant-design/icons';

import { Button, Dropdown, MenuProps, Space  } from 'antd';

const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
          1st menu item
        </a>
      ),
    },
    {
      key: '2',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
          2nd menu item (disabled)
        </a>
      ),
      icon: <SmileOutlined />,
      disabled: false,
    },
    {
      key: '3',
      label: (
        <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
          3rd menu item (disabled)
        </a>
      ),
      disabled: false,
    },
    {
      key: '4',
      danger: true,
      label: 'a danger item',
    },
    {
        key: '5',
        label: 'disabled sub menu',
        disabled: false,
        children: [
          {
            key: '3-1',
            label: '5d menu item',
          },
          {
            key: '3-2',
            label: '6th menu item',
          },
        ],
      },
  ];

const meta: Meta<typeof Dropdown> = {
  title: 'Dropdown',
  tags:['autodocs'],
  component: Dropdown,
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const DropdownOnHover: Story = {
  args:{
    children: <Button>Dropdown</Button>,
    menu:{items},
    placement:'bottomLeft',
  } ,
};

export const DropdownOnClick: Story = {
    args:{
      children: <Button>Dropdown</Button>,
      menu:{items},
      trigger:'click',
      placement:'bottomLeft',
    } ,
};

export const DropdownOptionsArrow: Story = {
    args:{
      children: <Button>Dropdown</Button>,
      menu:{items},
      arrow:true,
      placement:'bottomLeft',
    } ,
};

export const DropdownNoBorder: Story = {
    args:{
      children: <Space>Hover me <DownOutlined /></Space>,
      menu:{items},
      arrow:true,
      placement:'bottomLeft',
    } ,
};

export const DropdownArrow: Story = {
    args:{
      children: <Button><Space>Button <DownOutlined /></Space></Button>,
      menu:{items},
      placement:'bottomLeft',
    } ,
};

export const DropdownDisabled: Story = {
    args:{
      children: <Button><Space>Button <DownOutlined /></Space></Button>,
      menu:{items},
      disabled:true,
      placement:'bottomLeft',
    } ,
};

export const DropdownSelectable: Story = {
    args:{
      children: <Button><Space>Button <DownOutlined /></Space></Button>,
      menu:{items, selectable:true},
      placement:'bottomLeft',
    } ,
};

export const DropdownCascading: Story = {
    args:{
      children: <Button><Space>Button <DownOutlined /></Space></Button>,
      menu:{items, selectable:true},
      placement:'bottomLeft',
    } ,
};