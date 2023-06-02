import type { Meta, StoryObj } from '@storybook/react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card, Space } from 'antd';

const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];
  
  const tabListNoTitle = [
    {
      key: 'article',
      tab: 'article',
    },
    {
      key: 'app',
      tab: 'app',
    },
    {
      key: 'project',
      tab: 'project',
    },
  ];
  

const meta: Meta<typeof Card> = {
  title: 'Card',
  tags:['autodocs'],
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const BasicCard: Story = {
  args:{
   title:'Default size card',
   extra:(<a href="#">More</a>),
   style:{width:'300px'},
   children:<><p>Card content</p><p>Card content</p><p>Card content</p></>
  } ,
};

export const CardSmall: Story = {
    args:{
     size:'small',
     title:'Default size card',
     extra:(<a href="#">More</a>),
     style:{width:'300px'},
     children:<><p>Card content</p><p>Card content</p><p>Card content</p></>
    } ,
};

export const CardNoBorder: Story = {
    args:{
     bordered:false,
     title:'Default size card',
     extra:(<a href="#">More</a>),
     style:{width:'300px'},
     children:<><p>Card content</p><p>Card content</p><p>Card content</p></>
    } ,
};

export const SimpleCard: Story = {
    args:{
     style:{width:'300px'},
     children:<><p>Card content</p><p>Card content</p><p>Card content</p></>
    } ,
};

export const CustomizedCard: Story = {
    args:{
     style:{width:'300px'},
     hoverable:true,
     cover:(<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />),
    children:<><h3>Europe Street beat</h3><p>www.instagram.com</p></>,
    
    } ,
};

export const InnerCard: Story = {
    args:{
     style:{width:'300px'},
     type:'inner',
     title:'Inner Card title',
     extra:(<a href="#">More</a>),
     children:<p>Inner Card content</p>,
    } ,
};

export const CardWithTitleTabs: Story = {
    args:{
     style:{width:'100%'},
     title:"Card title",
     extra:(<a href="#">More</a>),
     tabList:(tabList),
     children:'Tab Content',
    } ,
};
export const CardWithTabs: Story = {
    args:{
     style:{width:'100%'},
     tabList:(tabListNoTitle),
     tabBarExtraContent:(<a href="#">More</a>),
     children:'Tab Content',
    } ,
};
export const CardBottomOptions: Story = {
    args:{
     style:{width:'300px'},
     cover:(<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>),
     actions:[<SettingOutlined key="setting" />, <EditOutlined key="edit" />, <EllipsisOutlined key="ellipsis" />],
    children:<><Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel"/> <h3>Card title</h3> <p>This is the description</p></>,
    } ,
};