import type { Meta, StoryObj } from '@storybook/react';

import { Pagination, PaginationProps   } from 'antd';

const onShowSizeChange: PaginationProps['onShowSizeChange'] = (current, pageSize) => {
  console.log(current, pageSize);
};

const itemRender: PaginationProps['itemRender'] = (_, type, originalElement) => {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
};

const meta: Meta<typeof Pagination > = {
  title: 'Pagination ',
  tags:['autodocs'],
  component: Pagination ,
};

export default meta;

type Story = StoryObj<typeof Pagination>;

export const PaginationBasic: Story = {
  args:{
    defaultCurrent:1,
    total:50,
  } ,
};

export const PaginationMore: Story = {
  args:{
    defaultCurrent:6,
    total:500,
  } ,
};

export const PaginationChanger: Story = {
  args:{
    showSizeChanger:true,
    onShowSizeChange:(onShowSizeChange),
    defaultCurrent:6,
    total:500,
  } ,
};

export const PaginationJumper: Story = {
  args:{
    showQuickJumper:true,
    defaultCurrent:6,
    total:500,
  } ,
};

export const PaginationMiniSize: Story = {
  args:{
    defaultCurrent:1,
    total:50,
    size:'small',
  } ,
};

export const PaginationTextPrevNext: Story = {
  args:{
    defaultCurrent:1,
    total:50,
    size:'small',
    itemRender:(itemRender),
  } ,
};