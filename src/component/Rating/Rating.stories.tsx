import type { Meta, StoryObj } from '@storybook/react';
import { SmileOutlined, HeartOutlined  } from '@ant-design/icons';
import { Rate  } from 'antd';

const desc = ['Terrible', 'Bad', 'Normal', 'Good', 'Wonderful'];

const meta: Meta<typeof Rate> = {
  title: 'Rating',
  tags:['autodocs'],
  component: Rate,
};


export default meta;

type Story = StoryObj<typeof Rate>;

export const BasicRate: Story = {};

export const RateHalf: Story = {
    args:{
     allowHalf:true,
     defaultValue:2.5,
    } ,
};
export const RateReadOnly: Story = {
    args:{
     disabled:true,
     defaultValue:2,
    } ,
};
export const RatePopupText: Story = {
    args:{
     tooltips:(desc),
    } ,
};
export const RateAtlestOne: Story = {
    args:{
     allowClear:false,
    } ,
};
export const RateSmile: Story = {
    args:{
     character:<SmileOutlined/>
    } ,
};
export const RateHeart: Story = {
    args:{
     character:<HeartOutlined/>
    } ,
};
export const RateText: Story = {
    args:{
     character:"A",
    } ,
};