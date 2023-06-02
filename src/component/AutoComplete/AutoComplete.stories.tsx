import type { Meta, StoryObj } from '@storybook/react';

import { AutoComplete, Input  } from 'antd';

const options = [
    { value: 'Burns Bay Road' },
    { value: 'Downing Street' },
    { value: 'Wall Street' },
  ];

const meta: Meta<typeof AutoComplete> = {
  title: 'Auto Complete',
  tags:['autodocs'],
  component: AutoComplete,
};

export default meta;

type Story = StoryObj<typeof AutoComplete>;


export const AutoCompleted: Story = {
  args:{
    options:(options),
    style:{width:200},
    placeholder:'try to type `b`',
    filterOption:true,
  } ,
};

export const AutoCompletedSearch: Story = {
    args:{
      options:(options),
      style:{width:300},
      filterOption:true,
      children:<Input.Search size='large' placeholder='input here'/>
    } ,
  };