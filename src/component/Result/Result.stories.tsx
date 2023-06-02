import type { Meta, StoryObj } from '@storybook/react';
import { SmileOutlined } from '@ant-design/icons';
import { Button, Result } from 'antd';

const meta: Meta<typeof Result> = {
  title: 'Result',
  tags:['autodocs'],
  component: Result,
};

export default meta;

type Story = StoryObj<typeof Result>;

export const Success: Story = {
  args:{
    status:'success',
    title:'Successfully Purchased Cloud Server ECS!',
    subTitle:"Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait.",
    extra:([
        <Button type="primary" key="console">
          Go Console
        </Button>,
        <Button key="buy">Buy Again</Button>,
    ]),
  } ,
};

export const Info: Story = {
    args:{
      title:'Your operation has been executed',
      extra:([
        <Button type="primary" key="console">
            Go Console
        </Button>
      ]),
    } ,
};

export const warning: Story = {
    args:{
        status:'warning',
      title:'There are some problems with your operation.',
      extra:([
        <Button type="primary" key="console">
            Go Console
        </Button>
      ]),
    } ,
};

export const Status403: Story = {
    args:{
        status:'403',
      title:'403',
      subTitle:"Sorry, you are not authorized to access this page.",
      extra:(<Button type="primary">Back Home</Button>),
    } ,
};

export const Status404: Story = {
    args:{
        status:'404',
      title:'404',
      subTitle:"Sorry, the page you visited does not exist.",
      extra:(<Button type="primary">Back Home</Button>),
    } ,
};

export const Status500: Story = {
    args:{
        status:'500',
      title:'500',
      subTitle:"Sorry, something went wrong.",
      extra:(<Button type="primary">Back Home</Button>),
    } ,
};

export const StatusError: Story = {
    args:{
        status:"error",
    title:"Submission Failed",
    subTitle:"Please check and modify the following information before resubmitting.",
    extra:([
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy">Buy Again</Button>,
    ])
    } ,
};


export const CustomIcon: Story = {
    args:{
        icon:<SmileOutlined />,
        title:"Great, we have done all the operations!",
        extra:(<Button type="primary">Next</Button>),
    } ,
};