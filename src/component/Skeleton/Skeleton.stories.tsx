import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from 'antd';

const meta: Meta<typeof Skeleton> = {
  title: 'Skeleton',
  tags:['autodocs'],
  component: Skeleton,
};

export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Basic: Story = {};

export const ComplexCombination: Story = {
    args:{
        avatar:true,
        paragraph:({ rows: 4 }),
    },
};

export const ActiveAnimation: Story = {
    args:{
        active:true,
    },
};

