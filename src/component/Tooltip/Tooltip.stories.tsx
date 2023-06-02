import type { Meta, StoryObj } from '@storybook/react';

import { Tooltip, Space, Button } from 'antd';

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

const customColors = ['#f50', '#2db7f5', '#87d068', '#108ee9'];

const meta: Meta<typeof Tooltip> = {
  title: 'Tooltip',
  tags:['autodocs'],
  component: Tooltip,
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  args:{
    title:'prompt text',
    children:<span>Tooltip will show on mouse enter.</span>,
  } ,
};

export const TooltipTL: Story = {
    args:{
      title:'prompt text',
      placement:'topLeft',
      children:<span>Tooltip will show on top Left.</span>,
    } ,
};
export const TooltipTC: Story = {
    args:{
      title:'prompt text',
      placement:'top',
      children:<span>Tooltip will show on top Center.</span>,
    } ,
};
export const TooltipTR: Story = {
    args:{
      title:'prompt text',
      placement:'topRight',
      children:<span>Tooltip will show on top Right.</span>,
    } ,
};

export const TooltipBL: Story = {
    args:{
      title:'prompt text',
      placement:'bottomLeft',
      children:<span>Tooltip will show on bottom Left.</span>,
    } ,
};
export const TooltipBC: Story = {
    args:{
      title:'prompt text',
      placement:'bottom',
      children:<span>Tooltip will show on bottom Center.</span>,
    } ,
};
export const TooltipBR: Story = {
    args:{
      title:'prompt text',
      placement:'bottomRight',
      children:<span>Tooltip will show on bottom Right.</span>,
    } ,
};

export const TooltipRT: Story = {
    args:{
      title:'prompt text',
      placement:'rightTop',
      children:<span>Tooltip will show on right Top.</span>,
    } ,
};
export const TooltipRC: Story = {
    args:{
      title:'prompt text',
      placement:'right',
      children:<span>Tooltip will show on right Center.</span>,
    } ,
};
export const TooltipRB: Story = {
    args:{
      title:'prompt text',
      placement:'rightBottom',
      children:<span>Tooltip will show on right Bottom.</span>,
    } ,
};

export const TooltipLT: Story = {
    args:{
      title:'prompt text',
      placement:'leftTop',
      children:<span>Tooltip will show on left Top.</span>,
    } ,
};
export const TooltipLC: Story = {
    args:{
      title:'prompt text',
      placement:'left',
      children:<span>Tooltip will show on Left Center.</span>,
    } ,
};
export const TooltipLB: Story = {
    args:{
      title:'prompt text',
      placement:'leftBottom',
      children:<span>Tooltip will show on left Bottom.</span>,
    } ,
};
export const TooltipNoArrow: Story = {
    args:{
      title:'prompt text',
      arrow:false,
      children:<span>Tooltip without arrow.</span>,
    } ,
};

export const TooltipDefaultOpen: Story = {
    args:{
      title:'Default Open',
      arrow:false,
      defaultOpen:true,
      children:<span>Tooltip without arrow.</span>,
    } ,
};
export const TooltipColor: Story = {
    args:{
      children:<Space wrap>{colors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}</Space>,
    } ,
};
export const TooltipCustomColor: Story = {
    args:{
      children:<Space wrap>{customColors.map((color) => (
        <Tooltip title="prompt text" color={color} key={color}>
          <Button>{color}</Button>
        </Tooltip>
      ))}</Space>,
    } ,
};