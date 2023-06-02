import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, List, Typography, Card, Skeleton, Divider } from 'antd';


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const datavatar = [
    {
      title: 'Ant Design Title 1',
    },
    {
      title: 'Ant Design Title 2',
    },
    {
      title: 'Ant Design Title 3',
    },
    {
      title: 'Ant Design Title 4',
    },
    {
      title: 'Ant Design Title 5',
    },
    {
      title: 'Ant Design Title 6',
    },
  ];

  interface DataType {
    gender?: string;
    name: {
      title?: string;
      first?: string;
      last?: string;
    };
    email?: string;
    picture: {
      large?: string;
      medium?: string;
      thumbnail?: string;
    };
    nat?: string;
    loading: boolean;
  }
  
  const count = 3;
  const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
  
  interface ScrollDataType {
    gender: string;
    name: {
      title: string;
      first: string;
      last: string;
    };
    email: string;
    picture: {
      large: string;
      medium: string;
      thumbnail: string;
    };
    nat: string;
  }


const meta: Meta<typeof List> = {
  title: 'List',
  tags:['autodocs'],
  component: List,
};

export default meta;

type Story = StoryObj<typeof List>;

export const SimpleList: Story = {
  args:{
   header:(<div>Header</div>),
   footer:(<div>Footer</div>),
   bordered:true,
   dataSource:(data),
   renderItem:((item) => (
    <List.Item>
      <Typography.Text mark>[ITEM]</Typography.Text> {item}
    </List.Item>
  ))
  } ,
};

export const ListLarge: Story = {
    args:{
     size:'large',
     header:(<div>Header</div>),
     footer:(<div>Footer</div>),
     bordered:true,
     dataSource:(data),
     renderItem:((item) => <List.Item>{item}</List.Item>)
    } ,
};

export const ListSmall: Story = {
    args:{
     size:'small',
     header:(<div>Header</div>),
     footer:(<div>Footer</div>),
     bordered:true,
     dataSource:(data),
     renderItem:((item) => <List.Item>{item}</List.Item>)
    } ,
};

export const BasicList: Story = {
    args:{
    itemLayout:'horizontal',
     dataSource:(datavatar),
     renderItem:((item, index) => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
            title={<a href="https://ant.design">{item.title}</a>}
            description="Ant Design, a design language for background applications, is refined by Ant UED Team"
          />
        </List.Item>
      ))
    } ,
};

export const BasicTwoList: Story = {
  args:{
    className:"demo-loadmore-list", 
    itemLayout:'horizontal',
   dataSource:(datavatar),
   renderItem:((item, index) => (
      <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    ))
  } ,
};

export const PaginationList: Story = {
  args:{
    pagination:true,
    className:"demo-loadmore-list", 
    itemLayout:'horizontal',
   dataSource:(datavatar),
   renderItem:((item, index) => (
      <List.Item actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}>
        <List.Item.Meta
          avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description="Ant Design, a design language for background applications, is refined by Ant UED Team"
        />
      </List.Item>
    ))
  } ,
};


export const GridList4Col: Story = {
  args:{
    grid:({gutter:16, column:4}),
    dataSource:(datavatar),
    renderItem:((item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    ))
  } ,
};

export const GridList2Col: Story = {
  args:{
    grid:({gutter:16, column:2}),
    dataSource:(datavatar),
    renderItem:((item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    ))
  } ,
};

export const ResponsiveGridList: Story = {
  args:{
    grid:({gutter:16, column:2, xs: 1,
      sm: 2,
      md: 4,
      lg: 4,
      xl: 6,
      xxl: 3}),
    dataSource:(datavatar),
    renderItem:((item) => (
      <List.Item>
        <Card title={item.title}>Card content</Card>
      </List.Item>
    ))
  } ,
};
