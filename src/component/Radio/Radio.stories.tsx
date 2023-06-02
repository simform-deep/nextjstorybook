import type { Meta, StoryObj } from '@storybook/react';

import { Radio, Space, RadioChangeEvent  } from 'antd';

const onChange = (e: RadioChangeEvent) => {
    console.log(`radio checked:${e.target.value}`);
};

const RadioGroup = Radio.Group;

const meta: Meta<typeof Radio> = {
  title: 'Radio',
  tags:['autodocs'],
  component: Radio,
};

export default meta;

type Story = StoryObj<typeof Radio>;

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

export const RadioGroups: Story = {
    args:{
      children:<><RadioGroup><Radio value={1}>One</Radio><Radio value={2}>Two</Radio><Radio value={3}>Three</Radio><Radio value={4}>Four</Radio></RadioGroup></>
    } ,
};

export const RadioGroupsVertical: Story = {
    args:{
      children:<><Space direction='vertical'><Radio value={1}>One</Radio><Radio value={2}>Two</Radio><Radio value={3}>Three</Radio><Radio value={4}>Four</Radio></Space></>
    } ,
};

export const RadioButton: Story = {
    args:{
      children:<><Radio.Group defaultValue={1}><Radio.Button value={1}>One</Radio.Button><Radio.Button value={2}>Two</Radio.Button><Radio.Button value={3}>Three</Radio.Button></Radio.Group></>
    } ,
};

export const RadioSolidButton: Story = {
    args:{
      children:<><Radio.Group defaultValue={1} buttonStyle='solid'><Radio.Button value={1}>One</Radio.Button><Radio.Button value={2}>Two</Radio.Button><Radio.Button value={3}>Three</Radio.Button></Radio.Group></>
    } ,
};

export const RadioSolidButtonLarge: Story = {
    args:{
      children:<><Radio.Group defaultValue={1} buttonStyle='solid' size='large'><Radio.Button value={1}>One</Radio.Button><Radio.Button value={2}>Two</Radio.Button><Radio.Button value={3}>Three</Radio.Button></Radio.Group></>
    } ,
};

export const RadioSolidButtonSmall: Story = {
    args:{
      children:<><Radio.Group defaultValue={1} buttonStyle='solid' size='small'><Radio.Button value={1}>One</Radio.Button><Radio.Button value={2}>Two</Radio.Button><Radio.Button value={3}>Three</Radio.Button></Radio.Group></>
    } ,
};