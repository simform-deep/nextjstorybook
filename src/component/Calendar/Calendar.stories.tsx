import type { Meta, StoryObj } from '@storybook/react';
import { Calendar } from 'antd';
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

const meta: Meta<typeof Calendar> = {
  title: 'Calendar',
  tags:['autodocs'],
  component: Calendar,
};

export default meta;

type Story = StoryObj<typeof Calendar>;

export const BasicCalendar: Story = {};