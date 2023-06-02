import type { Meta, StoryObj } from '@storybook/react';
import { SolutionOutlined, UserOutlined, LoadingOutlined, SmileOutlined  } from '@ant-design/icons';
import { Divider, Steps } from 'antd';

const steps = [
    {
      title: 'First',
      content: 'First-content',
    },
    {
      title: 'Second',
      content: 'Second-content',
    },
    {
      title: 'Last',
      content: 'Last-content',
    },
  ];

const meta: Meta<typeof Steps> = {
  title: 'Steps',
  tags:['autodocs'],
  component: Steps,
};

export default meta;

type Story = StoryObj<typeof Steps>;

export const StepsBasic: Story = {
  args:{
    current:1,
    items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
  } ,
};

export const StepsBasicSmall: Story = {
    args:{
      size:'small',
      current:1,
      items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};

export const StepsBasicError: Story = {
    args:{
      current:1,
      status:'error',
      items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};

export const StepsBasicProgress: Story = {
    args:{
      current:1,
      percent:60,
      items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};

export const StepsBasicIcon: Story = {
    args:{
      current:1,
      items:[{title: 'Login', status: 'finish', icon: <UserOutlined />}, {title: 'Verification', status: 'finish', icon: <SolutionOutlined />}, {title: 'Pay', status: 'process', icon: <LoadingOutlined />}, {title: 'Done', status: 'wait', icon: <SmileOutlined />}]
    } ,
};

export const StepsVertical: Story = {
    args:{
      direction:'vertical',
      current:1,
      items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};

export const StepsVerticalSmall: Story = {
    args:{
        direction:'vertical',
        size:'small',
        current:1,
        items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};

export const StepsBasicDots: Story = {
    args:{
      current:1,
      progressDot:true,
      items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};

export const StepsBasicDotsVertical: Story = {
    args:{
      current:1,
      progressDot:true,
      direction:'vertical',
      items:[{title: 'Finished', description: 'This is a description.'}, {title: 'In Progress', description: 'This is a description.'}, {title: 'Waiting', description: 'This is a description.'}]
    } ,
};