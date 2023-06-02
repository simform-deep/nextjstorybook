import type { Meta, StoryObj } from '@storybook/react';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button, message, Popconfirm } from 'antd';

const confirm = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.success('Click on Yes');
};
  
const cancel = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
    message.error('Click on No');
};

const meta: Meta<typeof Popconfirm> = {
  title: 'Popconfirm',
  tags:['autodocs'],
  component: Popconfirm,
};

export default meta;

type Story = StoryObj<typeof Popconfirm>;

export const Basic: Story = {
  args:{
    title:'Delete the task',
    description:'Are you sure to delete this task?',
    onConfirm:(confirm),
    onCancel:(cancel),
    okText:'Yes',
    cancelText:'No',
    children:<Button danger>Delete</Button>

  } ,
};

export const PopconfirmTopLeft: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'topLeft',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmTopCenter: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'top',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmTopRight: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'topRight',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmBottomLeft: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'bottomLeft',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmBottomCenter: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'bottom',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmBottomRight: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'bottomRight',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmLeftTop: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'leftTop',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmLeftCenter: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'left',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmLeftBottom: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'leftBottom',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmRightTop: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'rightTop',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmRightCenter: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'right',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmRightBottom: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'rightBottom',
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmNoArrow: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      onConfirm:(confirm),
      onCancel:(cancel),
      okText:'Yes',
      cancelText:'No',
      placement:'top',
      arrow:false,
      children:<Button danger>Delete</Button>
  
    } ,
};

export const PopconfirmCustomizeIcon: Story = {
    args:{
      title:'Delete the task',
      description:'Are you sure to delete this task?',
      icon:(<QuestionCircleOutlined style={{ color: 'red' }} />),
      children:<Button danger>Delete</Button>
  
    } ,
};
