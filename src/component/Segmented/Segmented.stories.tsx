import type { Meta, StoryObj } from '@storybook/react';
import { AppstoreOutlined, BarsOutlined, UserOutlined } from '@ant-design/icons';
import { Segmented, Avatar } from 'antd';

const meta: Meta<typeof Segmented> = {
  title: 'Segmented',
  tags:['autodocs'],
  component: Segmented,
};

export default meta;

type Story = StoryObj<typeof Segmented>;

export const Basic: Story = {
  args:{
    options:(['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']),
  } ,
};

export const WithText: Story = {
    args:{
        options:([
            {
              label: 'List',
              value: 'List',
              icon: <BarsOutlined />,
            },
            {
              label: 'Kanban',
              value: 'Kanban',
              icon: <AppstoreOutlined />,
            },
          ])
    } ,
};

export const WithIcon: Story = {
    args:{
        options:([
            {
              value: 'List',
              icon: <BarsOutlined />,
            },
            {
              value: 'Kanban',
              icon: <AppstoreOutlined />,
            },
          ])
    } ,
};

export const CustomRender: Story = {
    args:{
        options:([
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
                  <div>User 1</div>
                </div>
              ),
              value: 'user1',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                  <div>User 2</div>
                </div>
              ),
              value: 'user2',
            },
            {
              label: (
                <div style={{ padding: 4 }}>
                  <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                  <div>User 3</div>
                </div>
              ),
              value: 'user3',
            },
          ])
    } ,
};
