import type { Meta, StoryObj } from '@storybook/react';
import { AndroidOutlined, AppleOutlined } from '@ant-design/icons';
import { Tabs, TabsProps, Button } from 'antd';

const onChange = (key: string) => {
    console.log(key);
  };
  
  const items: TabsProps['items'] = [
    {
      key: '1',
      label: `Tab 1`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: '2',
      label: `Tab 2`,
      children: `Content of Tab Pane 2`,
    },
    {
      key: '3',
      label: `Tab 3`,
      children: `Content of Tab Pane 3`,
    },
  ];

 const operations = <Button>Extra Action</Button>;

const meta: Meta<typeof Tabs> = {
  title: 'Tabs',
  tags:['autodocs'],
  component: Tabs,
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Basic: Story = {
  args:{
    defaultActiveKey:'1',
    items:(items),
    onChange:(onChange),
  } ,
};

export const TabsLarge: Story = {
    args:{
      defaultActiveKey:'1',
      items:(items),
      size:'large',
      onChange:(onChange),
    } ,
};

export const TabsSmall: Story = {
    args:{
      defaultActiveKey:'1',
      items:(items),
      size:'small',
      onChange:(onChange),
    } ,
};

export const TabsCentered: Story = {
    args:{
      defaultActiveKey:'1',
      centered:true,
      items:(items),
      onChange:(onChange),
    } ,
};

export const TabsIcons: Story = {
    args:{
      defaultActiveKey:'1',
      items:([AppleOutlined, AndroidOutlined].map((Icon, i) => {
        const id = String(i + 1);
  
        return {
          label: (
            <span>
              <Icon />
              Tab {id}
            </span>
          ),
          key: id,
          children: `Tab ${id}`,
        };
      }))
    } ,
};

export const TabsExtraContent: Story = {
    args:{
      defaultActiveKey:'1',
      items:(items),
      tabBarExtraContent:(operations),
    } ,
};
export const TabsCard: Story = {
    args:{
      defaultActiveKey:'1',
      items:(items),
      type:'card',
    } ,
};

export const TabsPositionLeft: Story = {
    args:{
      defaultActiveKey:'1',
      items:(items),
      tabPosition:'left',
    } ,
};
export const TabsPositionRight: Story = {
    args:{
      defaultActiveKey:'1',
      items:(items),
      tabPosition:'right',
    } ,
};