import type { Meta, StoryObj } from '@storybook/react';

import { Row, Col } from 'antd';

const meta: Meta<typeof Row> = {
  title: 'Grid',
  tags:['autodocs'],
  component: Row,
};

export default meta;

type Story = StoryObj<typeof Row>;

export const GridLayout24: Story = {
  args:{
    children:<><Col span={24} style={{border: '1px solid #ccc'}}>Col-24</Col></>
  } ,
};
export const GridLayout12: Story = {
  args:{
    children:<><Col span={12} style={{border: '1px solid #ccc'}}>Col-12</Col><Col span={12} style={{border: '1px solid #ccc'}}>Col-12</Col></>
  } ,
};
export const GridLayout8: Story = {
  args:{
    children:<><Col span={8} style={{border: '1px solid #ccc'}}>Col-8</Col><Col span={8} style={{border: '1px solid #ccc'}}>Col-8</Col><Col span={8} style={{border: '1px solid #ccc'}}>Col-8</Col></>
  } ,
};
export const GridLayout6: Story = {
  args:{
    children:<><Col span={6} style={{border: '1px solid #ccc'}}>Col-6</Col><Col span={6} style={{border: '1px solid #ccc'}}>Col-6</Col><Col span={6} style={{border: '1px solid #ccc'}}>Col-6</Col><Col span={6} style={{border: '1px solid #ccc'}}>Col-6</Col></>
  } ,
};

export const GridLayout24Space: Story = {
  args:{
    gutter:12,
    children:<><Col span={24}><div style={{border: '1px solid #ccc'}}>Col-12</div></Col></>
  } ,
};

export const GridLayout12Space: Story = {
  args:{
    gutter:12,
    children:<><Col span={12}><div style={{border: '1px solid #ccc'}}>Col-12</div></Col><Col span={12}><div style={{border: '1px solid #ccc'}}>Col-12</div></Col></>
  } ,
};

export const GridLayout8Space: Story = {
  args:{
    gutter:12,
    children:<><Col span={8}><div style={{border: '1px solid #ccc'}}>Col-8</div></Col><Col span={8}><div style={{border: '1px solid #ccc'}}>Col-8</div></Col><Col span={8}><div style={{border: '1px solid #ccc'}}>Col-8</div></Col></>
  } ,
};

export const GridLayout6Space: Story = {
  args:{
    gutter:12,
    children:<><Col span={6}><div style={{border: '1px solid #ccc'}}>Col-6</div></Col><Col span={6}><div style={{border: '1px solid #ccc'}}>Col-6</div></Col><Col span={6}><div style={{border: '1px solid #ccc'}}>Col-6</div></Col><Col span={6}><div style={{border: '1px solid #ccc'}}>Col-6</div></Col></>
  } ,
};

export const GridLayoutLeft: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0'},
    justify:'start',
    children:<><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col></>
  } ,
};

export const GridLayoutCenter: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0'},
    justify:'center',
    children:<><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col></>
  } ,
};

export const GridLayoutRight: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0'},
    justify:'end',
    children:<><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col></>
  } ,
};

export const GridLayoutBetween: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0'},
    justify:'space-between',
    children:<><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col></>
  } ,
};

export const GridLayoutAround: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0'},
    justify:'space-around',
    children:<><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col></>
  } ,
};

export const GridLayoutEvenly: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0'},
    justify:'space-evenly',
    children:<><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col><Col span={4}><div style={{border: '1px solid #ccc'}}>Col-4</div></Col></>
  } ,
};

export const GridLayoutResponsive: Story = {
  args:{
    style:{border:'1px solid #999', padding: '15px 0', textAlign: 'center'},
    justify:'space-evenly',
    children:<><Col xs={2} sm={4} md={6} lg={8} xl={10} style={{border:'1px solid #999'}}>Col-10</Col><Col xs={20} sm={16} md={12} lg={8} xl={4} style={{border:'1px solid #999'}}>Col-4</Col><Col xs={2} sm={4} md={6} lg={8} xl={10} style={{border:'1px solid #999'}}>Col-10</Col></>
  } ,
};