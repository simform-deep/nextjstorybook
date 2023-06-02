import type { Meta, StoryObj } from '@storybook/react';
import { LikeOutlined, ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Statistic } from 'antd';


const meta: Meta<typeof Statistic> = {
  title: 'Statistic',
  tags:['autodocs'],
  component: Statistic,

};

export default meta;

type Story = StoryObj<typeof Statistic>;

export const Basic: Story = {
  args:{
    title:'Active Users',
    value:'112893',
  } ,
};
 
export const Loading: Story = {
    args:{
      title:'Feedback',
      value:'1128',
      prefix:<LikeOutlined />,
    } ,
};

export const PrefixSuffix: Story = {
    args:{
      title:'Unmerged',
      value:'93',
      suffix: '/100',
    } ,
};

export const Card: Story = {
    args:{
        title:"Active",
        value:(11.28),
        precision:(2),
        valueStyle:{color: '#3f8600'},
        prefix:<ArrowUpOutlined />,
        suffix:"%",
    } ,
};