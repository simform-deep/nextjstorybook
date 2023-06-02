import type { Meta, StoryObj } from '@storybook/react';

import { QRCode } from 'antd';


const meta: Meta<typeof QRCode> = {
  title: 'QRCode',
  tags:['autodocs'],
  component: QRCode,
};

export default meta;

type Story = StoryObj<typeof QRCode>;

export const BasicQRCode: Story = {
  args:{
    value:('-'),
  } ,
};

export const QRCodeWithIcon: Story = {
    args:{
      errorLevel:'H',
      value:"https://ant.design/",
      icon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    } ,
};

export const QRCodeNoBorder: Story = {
    args:{
      errorLevel:'H',
      bordered:false,
      value:"https://ant.design/",
      icon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    } ,
};

export const QRCodeSize: Story = {
    args:{
      errorLevel:'H',
      size:340,
      value:"https://ant.design/",
      icon:"https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    } ,
};

export const QRCodeLoadingStatus: Story = {
    args:{
      status:'loading',
      value:"https://ant.design/",
    } ,
};

export const QRCodeExpiredStatus: Story = {
    args:{
      status:'expired',
      value:"https://ant.design/",
      onRefresh:(() => console.log('refresh')),
    } ,
};

export const QRCodeCustom: Story = {
    args:{
        value:"https://ant.design/",
        color:('#f00'),
    } ,
};
export const QRCodeCustomBackground: Story = {
    args:{
        value:"https://ant.design/",
        color:('#00ff37'),
        bgColor:('#999')
    } ,
};
