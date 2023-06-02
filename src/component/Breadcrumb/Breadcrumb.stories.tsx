import type { Meta, StoryObj } from '@storybook/react';
import { HomeOutlined, UserOutlined } from '@ant-design/icons';

import { Breadcrumb  } from 'antd';

const meta: Meta<typeof Breadcrumb > = {
  title: 'Breadcrumb',
  tags:['autodocs'],
  component: Breadcrumb,
};

export default meta;

type Story = StoryObj<typeof Breadcrumb >;

export const BreadcrumbLink: Story = {
  args:{
    items:[{title: 'Home'},{title: <a href="">Application Center</a>}, {title: <a href="">Application List</a>}, {title: 'An Application'}]
  } ,
};

export const BreadcrumbLinkWithIcon: Story = {
    args:{
      items:[{href: '', title: <HomeOutlined />},{href: '', title:(<><UserOutlined /><span>Application List</span></>)}, {title: <a href="">Application List</a>}, {title: 'An Application'}]
    } ,
};

export const BreadcrumbLinkWithSeparator: Story = {
    args:{
      separator:'>',
      items:[{title: 'Home'},{href: '', title: 'Application Center',}, {href:'', title: 'Application List'}, {title: 'An Application'}]
    } ,
};