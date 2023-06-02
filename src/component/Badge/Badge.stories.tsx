import type { Meta, StoryObj } from '@storybook/react';
import { ClockCircleOutlined, NotificationOutlined  } from '@ant-design/icons';
import { Avatar, Badge, Card, Space } from 'antd';

const colors = [
    'pink',
    'red',
    'yellow',
    'orange',
    'cyan',
    'green',
    'blue',
    'purple',
    'geekblue',
    'magenta',
    'volcano',
    'gold',
    'lime',
];

const customcolors = [
    {name: 'Red', code: '#f00'},
    {name: 'Blue', code: '#7700ff'},
    {name: 'Yellow', code: '#b3ff00'},
];

const meta: Meta<typeof Badge> = {
  title: 'Badge',
  tags:['autodocs'],
  component: Badge,
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const BasicBadge: Story = {
  args:{
    count:5,
    children:<Avatar shape='square' size='large'/>
  } ,
};

export const BadgeIcon: Story = {
    args:{
      count:(<ClockCircleOutlined style={{ color: '#f5222d' }} />),
      children:<Avatar shape='square' size='large'/>
    } ,
};

export const OverflowCount: Story = {
    args:{
      count:99,
      overflowCount:10,
      children:<Avatar shape='square' size='large'/>
    } ,
}

export const OffsetBadge: Story = {
    args:{
      count:5,
      offset:[10, 10],
      children:<Avatar shape='square' size='large'/>
    } ,
};

export const BadgeDot: Story = {
    args:{
      dot:true,
      children:<NotificationOutlined  style={{fontSize: '20px'}}/>
    } ,
};

export const BadgeClickable: Story = {
    args:{
      children:<a href='#'><Badge count={5}><Avatar shape='square' size='large'/></Badge></a>,
    } ,
};
export const BadgeSmall: Story = {
    args:{
        count:99,
        size:'small',
        overflowCount:10,
        children:<Avatar shape='square' size='large'/>
    } ,
};

export const BadgeStatus: Story = {
    args:{
      //status:'success',
      children:<Space direction='vertical'><Badge status='default' text='Default'/><Badge status='success' text='Success'/><Badge status='error' text='Error'/><Badge status='processing' text='Processing'/><Badge status='warning' text='Warning'/></Space>
    } ,
};

export const ColorfulBadge: Story = {
    args:{
      //status:'success',
      children:<Space direction='vertical'>{colors.map((color)=>(<Badge key={color} color={color} text={color}/>))}</Space>
    } ,
};

export const CustomColorfulBadge: Story = {
    args:{
      //status:'success',
      children:<Space direction='vertical'>{customcolors.map((color)=>(<Badge key={color.name} color={color.code} text={color.name}/>))}</Space>
    } ,
};

export const RibbonBadge: Story = {
    args:{
      //status:'success',
      children:<Space direction='vertical' size="middle" style={{ width: '100%' }}><Badge.Ribbon text="Hippies" color="red">
      <Card title="Pushes open the window" size="small">
        and raises the spyglass.
      </Card>
    </Badge.Ribbon></Space>
    } ,
};