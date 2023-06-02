import type { Meta, StoryObj } from '@storybook/react';
import { Slider, Switch } from 'antd';
import type { SliderMarks } from 'antd/es/slider';

const formatter = (value: number) => `${value}%`;

const style: React.CSSProperties = {
    display: 'inline-block',
    height: 300,
    marginLeft: 70,
};

const marks: SliderMarks = {
    0: '0°C',
    26: '26°C',
    37: '37°C',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100°C</strong>,
    },
  };

const meta: Meta<typeof Slider> = {
  title: 'Slider',
  tags:['autodocs'],
  component: Slider,
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const BasicSlider: Story = {
  args:{
   
  },
};
export const RangeSlider: Story = {
    args:{
     range:true,
     defaultValue:[20,50],
    },
};
export const SliderTooltip: Story = {
    args:{
     tooltip:{formatter},
    },
};

export const SliderTooltipDefaultShow: Story = {
    args:{
     tooltip:{formatter, open:true},
    },
};

export const GraduatedSlider: Story = {
    args:{
     marks:(marks),
     defaultValue:37,
    },
};

export const GraduatedRangeSlider: Story = {
    args:{
     marks:(marks),
     range:true,
     defaultValue:[20,50],
    },
};
export const GraduatedRangeFalse: Story = {
    args:{
     marks:(marks),
    included:false,
     defaultValue:37,
    },
};
export const GraduatedRangeSteps: Story = {
    args:{
     marks:(marks),
     step:10,
     defaultValue:37,
    },
};
export const GraduatedRangeStepsFull: Story = {
    args:{
     marks:(marks),
     step:null,
     defaultValue:37,
    },
};
 
export const SliderVertical: Story = {
    args:{
     vertical:true,
     style:(style),
     defaultValue:30,
    },
};

export const SliderRangeVertical: Story = {
    args:{
     vertical:true,
     range:true,
     style:(style),
     defaultValue:[20,50],
    },
};
export const SliderRangeMarksVertical: Story = {
    args:{
     vertical:true,
     range:true,
     marks:(marks),
     style:(style),
     defaultValue:[26,37],
    },
};

export const SliderReverse: Story = {
    args:{
     reverse:true,
     defaultValue:30,
    },
};

export const SliderReverseRange: Story = {
    args:{
     range:true,
     reverse:true,
     defaultValue:[0,20],
    },
};

export const SliderDraggableTrack: Story = {
    args:{
     range:{draggableTrack:true},
     defaultValue:[0,20],
    },
};