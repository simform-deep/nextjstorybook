import type { Meta, StoryObj } from '@storybook/react';
import { UserOutlined, SearchOutlined, SettingOutlined } from '@ant-design/icons';
import { Cascader, Input, Select, Space } from 'antd';


const { Option } = Select;

const selectBefore = (
  <Select defaultValue="http://">
    <Option value="http://">http://</Option>
    <Option value="https://">https://</Option>
  </Select>
);
const selectAfter = (
  <Select defaultValue=".com">
    <Option value=".com">.com</Option>
    <Option value=".jp">.jp</Option>
    <Option value=".cn">.cn</Option>
    <Option value=".org">.org</Option>
  </Select>
);

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
    },
];

const { Search } = Input;
const onSearch = (value: string) => console.log(value);


const meta: Meta<typeof Input> = {
  title: 'Input',
  tags:['autodocs'],
  component: Input,
};


export default meta;

type Story = StoryObj<typeof Input>;

export const BasicInput: Story = {
  args:{
    placeholder:'Basic Input',
  } ,
};

export const InputIcon: Story = {
    args:{
      placeholder:'Icon Input',
      prefix:<UserOutlined />,
    } ,
};

export const InputIconSearch: Story = {
    args:{
      placeholder:'Icon Input',
      suffix:<SearchOutlined />,
    } ,
};

export const InputLarge: Story = {
    args:{
      placeholder:'Basic Input',
      size:'large',
    } ,
};

export const InputSmall: Story = {
    args:{
      placeholder:'Basic Input',
      size:'small',
    } ,
};

export const InputPrePostTab: Story = {
    args:{
      addonBefore:'http://',
      addonAfter: '.com',
      defaultValue: 'mysite',
    } ,
};

export const InputPrePostSelect: Story = {
    args:{
      addonBefore:(selectBefore),
      addonAfter: (selectAfter),
      defaultValue: 'mysite',
    } ,
};

export const InputPostIcon: Story = {
    args:{
      addonAfter: <SettingOutlined />,
      defaultValue: 'mysite',
    } ,
};
export const InputPostText: Story = {
    args:{
      addonBefore:'http://',
      suffix:'.com',
      defaultValue: 'mysite',
    } ,
};

export const BasicInputClear: Story = {
    args:{
      placeholder:'Basic Input',
      allowClear:true,
    } ,
};

export const BasicInputMaxlenght: Story = {
    args:{
      placeholder:'Basic Input',
      showCount:true,
      maxLength:100,
    } ,
};

export const BasicInputPassword: Story = {
    args:{
      type:'Password',
    } ,
};


  