import type { Meta, StoryObj } from '@storybook/react';

import { Button, Popover } from 'antd';

const content = (
    <div>
      <p>Content</p>
      <p>Content</p>
    </div>
  );

const meta: Meta<typeof Popover> = {
  title: 'Popover',
  tags:['autodocs'],
  component: Popover,
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const BasicPopover: Story = {
  args:{
    content:(content),
    title:'Title',
    children:<Button type='primary'>Hover me</Button>
  } ,
};

export const PopoverHover: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'hover',
      children:<Button>Hover me</Button>
    } ,
};

export const PopoverFocus: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'focus',
      children:<Button>Focus me</Button>
    } ,
};

export const PopoverClick: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      children:<Button>Click me</Button>
    } ,
};

export const PopoverPlacementTL: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'topLeft',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementTC: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'top',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementTR: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'topRight',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementBL: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'bottomLeft',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementBC: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'bottom',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementBR: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'bottomRight',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementRL: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'rightTop',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementRC: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'right',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementRB: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'rightBottom',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementLT: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'leftTop',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementLC: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'left',
      children:<Button>Click me</Button>
    } ,
};
export const PopoverPlacementLB: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      placement:'leftBottom',
      children:<Button>Click me</Button>
    } ,
};

export const PopoverNoArrow: Story = {
    args:{
      content:(content),
      title:'Title',
      trigger:'click',
      arrow:false,
      children:<Button>Click me</Button>
    } ,
};