import type { Meta, StoryObj } from '@storybook/react';

import { DatePicker , DatePickerProps, TimePicker, TimePickerProps, Space  } from 'antd';

const { RangePicker } = DatePicker;

const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

const meta: Meta<typeof DatePicker> = {
  title: 'Date Picker',
  tags:['autodocs'],
  component: DatePicker,
};

export default meta;

type Story = StoryObj<typeof DatePicker>;

const PickerRange = () => {
   return <>
        <Space direction="vertical" size={12}>
            <RangePicker />
            <RangePicker showTime />
            <RangePicker picker="week" />
            <RangePicker picker="month" />
            <RangePicker picker="quarter" />
            <RangePicker picker="year" />
        </Space>
    </>
};

export const DatePick: Story = {
    args:{
        picker:'date',
    } ,
};  

export const TimePick: Story = {
    args:{
        picker:'time',
    } ,    
}; 

export const DatePickNoBorder: Story = {
    args:{
        picker:'date',
        bordered:false,
        placement:'bottomRight'
    } ,
};  

export const TimePickNoBorder: Story = {
    args:{
        picker:'time',
        bordered:false,
    } ,    
}; 

export const RangePickers: Story = {
    render: () => <PickerRange />,
};