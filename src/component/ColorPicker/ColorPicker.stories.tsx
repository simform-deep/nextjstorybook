import type { Meta, StoryObj } from '@storybook/react';

import { ColorPicker  } from 'antd';
import type { Color } from 'antd/es/color-picker';

const meta: Meta<typeof ColorPicker> = {
  title: 'Color Picker ',
  tags:['autodocs'],
  component: ColorPicker,
};

export default meta;

type Story = StoryObj<typeof ColorPicker>;

export const BasicColorPicker: Story = {};
