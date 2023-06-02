import type { Meta, StoryObj } from '@storybook/react';

import { Table, Divider } from 'antd';
import type { ColumnsType } from 'antd/es/table';

interface DataType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
  }
  
  const columns: ColumnsType<DataType> = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
    },
  ];

const meta: Meta<typeof Table> = {
  title: 'Table',
  tags:['autodocs'],
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const BasicTable: Story = {
  args:{
    columns:(columns),
    dataSource:(data),
  } ,
};

export const TableMiddle: Story = {
    args:{
      columns:(columns),
      dataSource:(data),
      size:'middle',
    } ,
};

export const TableSmall: Story = {
    args:{
      columns:(columns),
      dataSource:(data),
      size:'small',
    } ,
};

export const TableSelect: Story = {
    args:{
      columns:(columns),
      dataSource:(data),
      rowSelection:true,
    } ,
};