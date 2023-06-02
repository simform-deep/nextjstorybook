import type { Meta, StoryObj } from '@storybook/react';

import { Progress, Tooltip } from 'antd';
import { red, green } from '@ant-design/colors';

const meta: Meta<typeof Progress> = {
  title: 'Progress',
  tags:['autodocs'],
  component: Progress,
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Basic: Story = {
  args:{
    percent:30,
  } ,
};

export const ActiveStatus: Story = {
    args:{
      percent:50,
      status:'active',
    } ,
};

export const ExceptionStatus: Story = {
    args:{
      percent:50,
      status:'exception',
    } ,
};

export const SuccessStatus: Story = {
    args:{
      percent:50,
      status:'success',
    } ,
};

export const NoInfoStatus: Story = {
    args:{
      percent:50,
      showInfo:false,
    } ,
};


export const CircularProgressNoInfo: Story = {
    args:{
      percent:50,
      type:'circle',
      showInfo:false,
    } ,
};

export const CircularProgress: Story = {
    args:{
      percent:75,
      type:'circle',
    } ,
};


export const CircularException: Story = {
    args:{
      percent:65,
      type:'circle',
      status:'exception',
    } ,
};

export const CircularSuccess: Story = {
    args:{
      percent:100,
      type:'circle',
    } ,
};

export const ActiveStatusSmall: Story = {
    args:{
      percent:50,
      size:'small',
    } ,
};
export const CircularProgressNoInfoSmall: Story = {
    args:{
      percent:50,
      type:'circle',
      size:'small',
      showInfo:false,
    } ,
};


export const CircularDashboard: Story = {
    args:{
      percent:80,
      type:'dashboard',
    } ,
};

export const CircularDashboardGap: Story = {
    args:{
      percent:80,
      type:'dashboard',
      gapDegree:30,
    } ,
};

 
export const CircularCustomText: Story = {
    args:{
      percent:80,
      type:'circle',
      format:((percent) => `${percent} Days`),
    } ,
};

export const CircularCustomDone: Story = {
    args:{
      percent:100,
      type:'circle',
      format:(() => 'Done'),
    } ,
};

export const CircularTooltip: Story = {
    args:{
        percent:60,
        success:({ percent: 30 }),
        type:"circle",
        children:<Tooltip title="3 done / 3 in progress / 4 to do"></Tooltip>,
    } ,
};


export const ProgressGradient: Story = {
    args:{
      percent:99.9,
      strokeColor:({ '0%': '#108ee9', '100%': '#87d068' }),
    } ,
};

export const ProgressCircleGradient: Story = {
    args:{
      percent:69,
      type:'circle',
      strokeColor:({ '0%': '#108ee9', '100%': '#87d068' }),
    } ,
};


export const StrokeLinecap: Story = {
    args:{
      percent:69,
      strokeLinecap:"butt"
    } ,
};

export const StrokeLinecapCircle: Story = {
    args:{
      percent:69,
      strokeLinecap:"butt",
      type:'circle',
    } ,
};

export const StrokeLinecapDashboard: Story = {
    args:{
      percent:69,
      strokeLinecap:"butt",
      type:'dashboard',
    } ,
};


export const ProgressSteps3: Story = {
    args:{
      percent:69,
      steps:3,
    } ,
};

export const ProgressSteps5: Story = {
    args:{
      percent:69,
      steps:5,
    } ,
};

export const ProgressSteps5Small: Story = {
    args:{
      percent:90,
      steps:5,
      size:'small',
      strokeColor:(green[6]),
    } ,
};

export const ProgressSteps5Color: Story = {
    args:{
      percent:60,
      steps:5,
      strokeColor:([green[6], green[6], red[5]]),
    } ,
};