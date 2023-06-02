import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox, Divider } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';

const CheckboxGroup = Checkbox.Group;

const plainOptions = ['Apple', 'Pear', 'Orange'];

const options = [
    { label: 'Apple', value: 'Apple' },
    { label: 'Pear', value: 'Pear' },
    { label: 'Orange', value: 'Orange' },
  ];
  const onChange = (checkedValues: CheckboxValueType[]) => {
    console.log('checked = ', checkedValues);
  };

const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: false },
];

const meta: Meta<typeof Checkbox> = {
  title: 'Checkbox',
  tags:['autodocs'],
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const GroupCheckbox = () => {
 return <>
    <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group options={options} defaultValue={['Pear']} onChange={onChange} />
    <br />
    <br />
    <Checkbox.Group
      options={optionsWithDisabled}
      disabled
      defaultValue={['Apple']}
      onChange={onChange}
    />
  </>
};

export const BasicCheckbox: Story = {
  args:{
   children:'Chackbox',
   value:'checkbox'
  } ,
};

export const DisableCheckbox: Story = {
    args:{
     children:'Chackbox',
     value:'checkbox',
     disabled:true,
    } ,
};

export const BasicCheckboxFilled: Story = {
    args:{
     children:'Chackbox',
     indeterminate:true,
     value:'checkbox'
    } ,
};


export const CheckboxGroups: Story ={
  render: () => <GroupCheckbox />,
}