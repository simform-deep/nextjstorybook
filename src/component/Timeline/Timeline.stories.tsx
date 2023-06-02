import type { Meta, StoryObj } from '@storybook/react';
import { ClockCircleOutlined, SmileOutlined } from '@ant-design/icons';
import { Timeline } from 'antd';

const meta: Meta<typeof Timeline> = {
  title: 'Timeline',
  tags:['autodocs'],
  component: Timeline,
};

export default meta;

type Story = StoryObj<typeof Timeline>;

export const Basic: Story = {
  args:{
    items:([
        {
          children: 'Create a services site 2015-09-01',
        },
        {
          children: 'Solve initial network problems 2015-09-01',
        },
        {
          children: 'Technical testing 2015-09-01',
        },
        {
          children: 'Network problems being solved 2015-09-01',
        },
      ])
  } ,
};

export const Pending: Story = {
    args:{
        pending:true,
      items:([
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
          {
            children: 'Network problems being solved 2015-09-01',
          },
        ])
    } ,
};

export const Reverse: Story = {
    args:{
        pending:true,
        reverse:true,
      items:([
          {
            children: 'Create a services site 2015-09-01',
          },
          {
            children: 'Solve initial network problems 2015-09-01',
          },
          {
            children: 'Technical testing 2015-09-01',
          },
          {
            children: 'Network problems being solved 2015-09-01',
          },
        ])
    } ,
};


export const Custom: Story = {
    args:{
        pending:true,
        reverse:true,
        items:([
            {
              children: 'Create a services site 2015-09-01',
            },
            {
              children: 'Solve initial network problems 2015-09-01',
            },
            {
              dot: <ClockCircleOutlined className="timeline-clock-icon" />,
              color: 'red',
              children: 'Technical testing 2015-09-01',
            },
            {
              children: 'Network problems being solved 2015-09-01',
            },
          ])
    } ,
};

export const LeftMode: Story = {
    args:{
        mode:'left',
        items:([
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ])
    } ,
};

export const RightMode: Story = {
    args:{
        mode:'right',
        items:([
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ])
    } ,
};

export const AlternateMode: Story = {
    args:{
        mode:'alternate',
        items:([
          {
            label: '2015-09-01',
            children: 'Create a services',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Solve initial network problems',
          },
          {
            children: 'Technical testing',
          },
          {
            label: '2015-09-01 09:12:11',
            children: 'Network problems being solved',
          },
        ])
    } ,
};


export const ColorMode: Story = {
    args:{
        items:([
            {
              color: 'green',
              children: 'Create a services site 2015-09-01',
            },
            {
              color: 'green',
              children: 'Create a services site 2015-09-01',
            },
            {
              color: 'red',
              children: (
                <>
                  <p>Solve initial network problems 1</p>
                  <p>Solve initial network problems 2</p>
                  <p>Solve initial network problems 3 2015-09-01</p>
                </>
              ),
            },
            {
              children: (
                <>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </>
              ),
            },
            {
              color: 'gray',
              children: (
                <>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </>
              ),
            },
            {
              color: 'gray',
              children: (
                <>
                  <p>Technical testing 1</p>
                  <p>Technical testing 2</p>
                  <p>Technical testing 3 2015-09-01</p>
                </>
              ),
            },
            {
              color: '#00CCFF',
              dot: <SmileOutlined />,
              children: <p>Custom color testing</p>,
            },
          ])
    } ,
};

export const ColorAlternateMode: Story = {
    args:{
        mode:'alternate',
        items:([
            {
              children: 'Create a services site 2015-09-01',
            },
            {
              children: 'Solve initial network problems 2015-09-01',
              color: 'green',
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.`,
            },
            {
              color: 'red',
              children: 'Network problems being solved 2015-09-01',
            },
            {
              children: 'Create a services site 2015-09-01',
            },
            {
              dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
              children: 'Technical testing 2015-09-01',
            },
          ])
    },
};

export const RightAlternateMode: Story = {
    args:{
        mode:'right',
        items:([
            {
                children: 'Create a services site 2015-09-01',
            },
            {
                children: 'Solve initial network problems 2015-09-01',
            },
            {
                dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
                color: 'red',
                children: 'Technical testing 2015-09-01',
            },
            {
                children: 'Network problems being solved 2015-09-01',
            },
        ])
    },
};