import type { Meta, StoryObj } from '@storybook/react';

import { Select, Space, SelectProps  } from 'antd';

const options: SelectProps['options'] = [];
for (let i = 10; i < 36; i++) {
    options.push({
      label: i.toString(36) + i,
      value: i.toString(36) + i,
    });
}
  
const handleChange = (value: string[]) => {
    console.log(`selected ${value}`);
};

const meta: Meta<typeof Select> = {
  title: 'Select',
  tags:['autodocs'],
  component: Select,
};

export default meta;

type Story = StoryObj<typeof Select>;

export const BasicSelect: Story = {
  args:{
    defaultValue:'lucy',
    style:{width:'200px'},
    options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
  } ,
};

export const LoadingSelect: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      loading:true,
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const ClearSelect: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      allowClear:true,
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const SelectSearch: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      showSearch:true,
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const NoBorderSelect: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      bordered:false,
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const SelectLarge: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      size:'large',
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const SelectSmall: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      size:'small',
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const SelectStatus: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      status:'error',
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const SelectDisabled: Story = {
    args:{
      defaultValue:'lucy',
      style:{width:'200px'},
      disabled:true,
      options:[{value: 'jack', label: 'Jack'}, { value: 'lucy', label: 'Lucy' }, { value: 'Yiminghe', label: 'yiminghe' }]
    } ,
};

export const MultipleSelection: Story = {
    args:{
      mode:'multiple',
      options:(options),
      placeholder:'Please select',
      style:{width:'100%'},
      
    } ,
};
export const MultipleSelectionClear: Story = {
    args:{
      mode:'multiple',
      options:(options),
      allowClear:true,
      placeholder:'Please select',
      style:{width:'100%'},
    } ,
};

export const SelectGroup: Story = {
    args:{
        defaultValue:'lucy',
        style:{width:'200px'},
        options:[{label: 'Manager',  options: [{ label: 'Jack', value: 'jack' }, { label: 'Lucy', value: 'lucy' }]}, {label: 'Engineer',  options: [{ label: 'yiminghe', value: 'Yiminghe' }]}]
    },
}
