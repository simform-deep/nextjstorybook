import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Radio, Space, RadioChangeEvent, Input } from 'antd';

const plainOptions = ['Apple', 'Pear', 'Orange'];
const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];
const optionsWithDisabled = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange', disabled: true },
];

const RadioGroup = Radio.Group;

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  tags:['autodocs'],
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

const GroupRadio = () => {
  const [value1, setValue1] = useState('Apple');
  const [value2, setValue2] = useState('Apple');
  const [value3, setValue3] = useState('Apple');
  const [value4, setValue4] = useState('Apple');

  const onChange1 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio1 checked', value);
    setValue1(value);
  };

  const onChange2 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio2 checked', value);
    setValue2(value);
  };

  const onChange3 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio3 checked', value);
    setValue3(value);
  };

  const onChange4 = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValue4(value);
  };

  return <>
      <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
      <br />
      <Radio.Group options={optionsWithDisabled} onChange={onChange2} value={value2} />
      <br />
      <br />
      <Radio.Group options={options} onChange={onChange3} value={value3} optionType="button" />
      <br />
      <br />
      <Radio.Group
        options={optionsWithDisabled}
        onChange={onChange4}
        value={value4}
        optionType="button"
        buttonStyle="solid"
      />
  </>
};

const GroupRadioVertical = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return <>
    <Radio.Group onChange={onChange} value={value}>
      <Space direction="vertical">
        <Radio value={1}>Option A</Radio>
        <Radio value={2}>Option B</Radio>
        <Radio value={3}>Option C</Radio>
        <Radio value={4}>
          More...
          {value === 4 ? <Input style={{ width: 100, marginLeft: 10 }} /> : null}
        </Radio>
      </Space>
    </Radio.Group>
    </>
};


export const BasicRadio: Story = {
  args:{
    children:'Radio',
  } ,
};

export const RadioDisabled: Story = {
    args:{
      children:'Radio',
      disabled:true,
    } ,
};

export const RadioGroups: Story ={
  render: () => <GroupRadio />,
}

export const VerticalRadioGroup: Story ={
  render: () => <GroupRadioVertical />,
}

