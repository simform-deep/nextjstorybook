import type { Meta, StoryObj } from '@storybook/react';

import { Alert } from 'antd';

const onClose = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e, 'I was closed.');
};

const meta: Meta<typeof Alert> = {
  title: 'Alert',
  tags:['autodocs'],
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;


export const InfoTextAlert: Story = {
    args:{
      message:'Info Text',
      type:'info',
    } ,
};

export const WarningTextAlert: Story = {
    args:{
      message:'Warning Text',
      type:'warning',
    } ,
};

export const SuccessTextAlert: Story = {
    args:{
      message:'Success Text',
      type:'success'
    } ,
};

export const ErrorTextAlert: Story = {
    args:{
      message:'Error Text',
      type:'error'
    } ,
};


export const ClosableAlert: Story = {
    args:{
        message:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",
        type:"warning",
        closable:true,
        onClose:(onClose),
    } ,
};

export const ClosableAlertTitle: Story = {
    args:{
        message:'Error Text',
        description:"Warning Text Warning Text Warning TextW arning Text Warning Text Warning TextWarning Text",
        type:"error",
        closable:true,
        onClose:(onClose),
    } ,
};

export const IconAlert: Story = {
    args:{
        message:'Success Tips',
        type:"success",
        closable:true,
        showIcon:true,
    } ,
};

export const IconAlertNoClosable: Story = {
    args:{
        message:'Informational Notes',
        type:"info",
        showIcon:true,
    } ,
};

export const IconAlertDiscription: Story = {
    args:{
        message:'Warning',
        description:"This is a warning notice about copywriting.",
        type:"warning",
        showIcon:true,
        closable:true,
    } ,
};

export const BannerAlertIcon: Story = {
    args:{
        message:'Very long warning text warning text text text text text text text',
        banner:true,
        showIcon:true,
    } ,
};
export const BannerAlertIconClosable: Story = {
    args:{
        message:'Error text',
        type:"error",
        banner:true,
        showIcon:true,
        closable:true,
    } ,
};
export const BannerAlertText: Story = {
    args:{
        message:'Warning text without icon',
        type:"info",
        banner:true,
        showIcon:false,
        closable:false,
    } ,
};
