import type { Meta, StoryObj } from '@storybook/react';

import { TreeSelect } from 'antd';

const treeData = [
    {
      value: 'parent 1',
      title: 'parent 1',
      children: [
        {
          value: 'parent 1-0',
          title: 'parent 1-0',
          children: [
            {
              value: 'leaf1',
              title: 'leaf1',
            },
            {
              value: 'leaf2',
              title: 'leaf2',
            },
          ],
        },
        {
          value: 'parent 1-1',
          title: 'parent 1-1',
          children: [
            {
              value: 'leaf3',
              title: <b style={{ color: '#08c' }}>leaf3</b>,
            },
          ],
        },
      ],
    },
  ];

const meta: Meta<typeof TreeSelect> = {
  title: 'Tree Select',
  tags:['autodocs'],
  component: TreeSelect,
};

export default meta;

type Story = StoryObj<typeof TreeSelect>;

export const BasicSelection: Story = {
  args:{
    showSearch:true,
    style:{width:'100%'},
    treeData:(treeData),
    dropdownStyle:{maxHeight:'400', overflow: 'auto'},
    placeholder:'Please select',
    allowClear:true,
    treeDefaultExpandAll:true,
  } ,
};

export const MultipleSelection: Story = {
    args:{
      showSearch:true,
      style:{width:'100%'},
      treeData:(treeData),
      dropdownStyle:{maxHeight:'400', overflow: 'auto'},
      placeholder:'Please select',
      allowClear:true,
      multiple:true,
      treeDefaultExpandAll:true,
    } ,
};

export const MultipleCheckableSelection: Story = {
    args:{
      showSearch:true,
      style:{width:'100%'},
      treeData:(treeData),
      dropdownStyle:{maxHeight:'400', overflow: 'auto'},
      placeholder:'Please select',
      allowClear:true,
      multiple:true,
      treeDefaultExpandAll:true,
      treeCheckable:true,
    } ,
};
