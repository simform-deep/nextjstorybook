import type { Meta, StoryObj } from '@storybook/react';
import { UserOutlined, AntDesignOutlined } from '@ant-design/icons';
import {  Avatar, Badge, Space, Tooltip } from 'antd';

const url = 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg';

const meta: Meta<typeof Avatar> = {
  title: 'Avatar',
  tags:['autodocs'],
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const BasicAvatar: Story = {
  args:{
    icon:<UserOutlined/>,
  } ,
};
export const CustomSizeAvatar: Story = {
    args:{
      size:80,
      icon:<UserOutlined/>,
    } ,
};
export const AvatarLarge: Story = {
    args:{
      size:'large',
      icon:<UserOutlined/>,
    } ,
};
export const AvatarSmall: Story = {
    args:{
      size:'small',
      icon:<UserOutlined/>,
    } ,
};

export const SquareAvatar: Story = {
    args:{
      size:'large',
      shape:'square',
      icon:<UserOutlined/>,
    } ,
};


export const AvatarAlphabet: Story = {
    args:{
      size:'large',
      children:"A"
    } ,
};

export const AvatarText: Story = {
    args:{
      size:'large',
      children:"User"
    } ,
};

export const AvatarImage: Story = {
    args:{
      size:'large',
      src:(url),
    } ,
};

export const AvatarBackgroundColor: Story = {
    args:{
      size:'large',
      style:{background:'#fde3cf', color: '#f56a00'},
      children:"A"
    } ,
};

export const AvatarBackgroundColorIcon: Story = {
    args:{
      size:'large',
      style:{background:'#87d068'},
      icon:<UserOutlined />,
    } ,
};


export const AvatarWithBadge: Story = {
    args:{
      size:80,
      shape:'square',
      children:<Badge count={1}><Avatar shape='square' icon={<UserOutlined />}></Avatar></Badge>,
    } ,
};
 
export const AvatarResponsive: Story = {
    args:{
      size:{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 },
      icon:<AntDesignOutlined />,
    } ,
};

export const AvatarGroups: Story = {
    args:{
    children:<Avatar.Group><Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=2"></Avatar><Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar><Tooltip title="Ant User" placement="top">
    <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
  </Tooltip><Avatar style={{ backgroundColor: '#1677ff' }} icon={<AntDesignOutlined />} /></Avatar.Group>,
    } ,
};