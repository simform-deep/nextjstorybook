import type { Meta, StoryObj } from '@storybook/react';
import { CaretRightOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const panelStyle = {
  marginBottom: 24,
  background: '#fff',
  borderRadius: 0,
  border: 'none',
};

const meta: Meta<typeof Collapse> = {
  title: 'Collapse',
  tags:['autodocs'],
  component: Collapse,
};

export default meta;

type Story = StoryObj<typeof Collapse>;

export const BasicCollapse: Story = {
  args:{
    defaultActiveKey:[1],
    children:<><Panel header='This is panel header 1' key={1}><p>{text}</p></Panel><Panel header='This is panel header 2' key={2}><p>{text}</p></Panel><Panel header='This is panel header 3' key={3}><p>{text}</p></Panel></>,
  } ,
};

export const CollapseLarge: Story = {
    args:{
      defaultActiveKey:[1],
      size:'large',
      children:<><Panel header='This is panel header 1' key={1}><p>{text}</p></Panel><Panel header='This is panel header 2' key={2}><p>{text}</p></Panel><Panel header='This is panel header 3' key={3}><p>{text}</p></Panel></>,
    } ,
};

export const CollapseSmall: Story = {
    args:{
        defaultActiveKey:[1],
        size:'small',
        children:<><Panel header='This is panel header 1' key={1}><p>{text}</p></Panel><Panel header='This is panel header 2' key={2}><p>{text}</p></Panel><Panel header='This is panel header 3' key={3}><p>{text}</p></Panel></>,
    } ,
};

export const CollapseAccordion: Story = {
    args:{
        accordion:true,
        defaultActiveKey:[1],
        children:<><Panel header='This is panel header 1' key={1}><p>{text}</p></Panel><Panel header='This is panel header 2' key={2}><p>{text}</p></Panel><Panel header='This is panel header 3' key={3}><p>{text}</p></Panel></>,
    } ,
};

export const NestedPanel: Story = {
  args:{
      children:<><Panel header='This is panel header 1' key={1}><Collapse defaultActiveKey={1}><Panel header="This is panel nest panel" key={1}><p>{text}</p></Panel></Collapse></Panel><Panel header='This is panel header 2' key={2}><p>{text}</p></Panel><Panel header='This is panel header 3' key={3}><p>{text}</p></Panel></>,
  } ,
};


export const Borderless: Story = {
  args:{
      bordered:false,
      defaultActiveKey:[1],
      children:<><Panel header='This is panel header 1' key={1}>{text}</Panel><Panel header='This is panel header 2' key={2}>{text}</Panel><Panel header='This is panel header 3' key={3}>{text}</Panel></>,
  } ,
};

export const CustomPanel: Story = {
  args:{
      bordered:false,
      defaultActiveKey:[1],
      expandIcon:(({isActive}) => <CaretRightOutlined rotate={isActive ? 90 : 0}/>),
      children:<><Panel header='This is panel header 1' key={1} style={panelStyle}>{text}</Panel><Panel header='This is panel header 2' key={2} style={panelStyle}>{text}</Panel><Panel header='This is panel header 3' key={3} style={panelStyle}>{text}</Panel></>,
  } ,
};

export const NoArrow: Story = {
  args:{
      defaultActiveKey:[1],
      children:<><Panel header='This is panel header 1' key={1} showArrow={false}>{text}</Panel><Panel header='This is panel header 2' key={2} showArrow={false}>{text}</Panel><Panel header='This is panel header 3' key={3} showArrow={false}>{text}</Panel></>,
  } ,
};

export const NoArrowAccordion: Story = {
  args:{
      defaultActiveKey:[1],
      accordion:true,
      children:<><Panel header='This is panel header 1' key={1} showArrow={false}>{text}</Panel><Panel header='This is panel header 2' key={2} showArrow={false}>{text}</Panel><Panel header='This is panel header 3' key={3} showArrow={false}>{text}</Panel></>,
  } ,
};

export const GhostCollapse: Story = {
  args:{
      defaultActiveKey:[1],
      ghost:true,
      children:<><Panel header='This is panel header 1' key={1}>{text}</Panel><Panel header='This is panel header 2' key={2}>{text}</Panel><Panel header='This is panel header 3' key={3}>{text}</Panel></>,
  } ,
};