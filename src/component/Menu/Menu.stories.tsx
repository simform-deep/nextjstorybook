import type { Meta, StoryObj } from '@storybook/react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';

const items: MenuProps['items'] = [
    {
      label: 'Navigation One',
      key: 'mail',
      icon: <MailOutlined />,
    },
    {
      label: 'Navigation Two',
      key: 'app',
      icon: <AppstoreOutlined />,
      disabled: true,
    },
    {
      label: 'Navigation Three - Submenu',
      key: 'SubMenu',
      icon: <SettingOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            {
              label: 'Option 1',
              key: 'setting:1',
            },
            {
              label: 'Option 2',
              key: 'setting:2',
            },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            {
              label: 'Option 3',
              key: 'setting:3',
            },
            {
              label: 'Option 4',
              key: 'setting:4',
            },
          ],
        },
      ],
    },
    {
      label: (
        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
          Navigation Four - Link
        </a>
      ),
      key: 'alipay',
    },
  ];

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  tags:['autodocs'],
  component: Menu ,
};

export default meta;

type Story = StoryObj<typeof Menu>;

export const TopNavigation: Story = {
  args:{
    className: 'customMenu',
    children:<Menu mode='horizontal' items={items}/>,
  } ,
};

export const SideNavigation: Story = {
  args:{
    className: 'customMenu',
    children:<Menu mode='vertical' items={items}/>,
  } ,
};

export const SideNavigationInline: Story = {
  args:{
    className: 'customMenu',
    children:<Menu mode='inline' items={items}/>,
  } ,
};
