import type { Meta, StoryObj } from '@storybook/react';
import { SmileOutlined } from '@ant-design/icons';

import { Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

const meta: Meta<typeof Typography> = {
  title: 'Typography',
  tags:['autodocs'],
  component: Typography,
  args:{
    children: "Button"
  }
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const TypoTitle: Story = {
  args:{
    children: <Title level={2}>Title</Title>,
    className: 'customTypography',
  } ,
};

export const TypoParagraph: Story = {
    args:{
      children: <Paragraph>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Paragraph>,
      className: 'customTypography',
    } ,
};

export const TypoParagraphEllipsis: Story = {
    args:{
      children: <Paragraph ellipsis>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Paragraph>,
      className: 'customTypography',
    } ,
};

export const TypoParagraphEllipsisExpand: Story = {
    args:{
      children: <Paragraph ellipsis={{expandable: true}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</Paragraph>,
      className: 'customTypography',
    } ,
};

export const TypoText: Story = {
    args:{
      children: <Text>Title</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextType: Story = {
    args:{
      children: <Text type='warning'>Warning Type Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextCopyable: Story = {
    args:{
      children: <Text copyable>Warning Type Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextEditable: Story = {
    args:{
      children: <Text editable>Warning Type Text</Text>,
      className: 'customTypography',
    } ,
};


export const TypoTextTooltip: Story = {
    args:{
      children: <Text editable={{icon: [<SmileOutlined key="copy-icon" />], tooltip:['Custom Note']}}>Warning Type Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextMark: Story = {
    args:{
      children: <Text mark>Marked Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextDisabled: Story = {
    args:{
      children: <Text disabled>Disable Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextStrong: Story = {
    args:{
      children: <Text strong>Strong Text</Text>,
      className: 'customTypography',
    } ,
};


export const TypoTextItalic: Story = {
    args:{
      children: <Text italic>Italic Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextUnderline: Story = {
    args:{
      children: <Text underline>Underline Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextDelete: Story = {
    args:{
      children: <Text delete>Delete Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextCode: Story = {
    args:{
      children: <Text code>Code Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextKeyboard: Story = {
    args:{
      children: <Text keyboard>Keyboard Text</Text>,
      className: 'customTypography',
    } ,
};

export const TypoTextLink: Story = {
    args:{
      children: <Link keyboard>https://ant.design/</Link>,
      className: 'customTypography',
    } ,
};