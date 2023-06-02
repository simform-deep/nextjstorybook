import type { Meta, StoryObj } from '@storybook/react';

import { Cascader } from 'antd';

const { SHOW_CHILD } = Cascader;

interface Option {
    value: string | number;
    label: string;
    children?: Option[];
}

const options: Option[] = [
    {
      label: 'Light',
      value: 'light',
      children: new Array(20)
        .fill(null)
        .map((_, index) => ({ label: `Number ${index}`, value: index })),
    },
    {
      label: 'Bamboo',
      value: 'bamboo',
      children: [
        {
          label: 'Little',
          value: 'little',
          children: [
            {
              label: 'Toy Fish',
              value: 'fish',
            },
            {
              label: 'Toy Cards',
              value: 'cards',
            },
            {
              label: 'Toy Bird',
              value: 'bird',
            },
          ],
        },
      ],
    },
  ];

const meta: Meta<typeof Cascader> = {
  title: 'Cascader',
  tags:['autodocs'],
  component: Cascader,
};


export default meta;

type Story = StoryObj<typeof Cascader>;

export const BasicCascader: Story = {
  args:{
    options:(options),
    placeholder:'Please select'
  } ,
};

export const DefaultCascader: Story = {
    args:{
      options:(options),
      defaultValue:['zhejiang', 'hangzhou', 'xihu'],
      placeholder:'Please select'
    } ,
};

export const ChackedCascader: Story = {
    args:{  
      options:(options),
      style:{width:'100%'},
      multiple:true,
      maxTagCount:'responsive',
      showCheckedStrategy:(SHOW_CHILD),
      placeholder:'Please select'
    } ,
};

export const BasicCascaderLarge: Story = {
    args:{
      options:(options),
      size:'large',
      placeholder:'Please select'
    } ,
};

export const BasicCascaderSmall: Story = {
    args:{
      options:(options),
      size:'small',
      placeholder:'Please select'
    } ,
};