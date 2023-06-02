import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Drawer } from 'antd';


const meta: Meta<typeof Drawer> = {
  title: 'Drawer',
  tags:['autodocs'],
  component: Drawer,
};

export default meta;

type Story = StoryObj<typeof Drawer>;

const DrawerBasic = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
      setOpen(false);
  };

  return <>
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Right Drawer" placement="right" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  </>
};


const DrawerLeft = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
      setOpen(false);
  };

  return <>
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Left Drawer" placement="left" onClose={onClose} open={open} size='large'>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  </>
};

const DrawerTop = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
      setOpen(false);
  };

  return <>
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Top Drawer" placement="top" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  </>
};

const DrawerBottom = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
      setOpen(false);
  };

  return <>
    <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title="Bottom Drawer" placement="bottom" onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
  </>
};


export const RightDrawer: Story = {
  render: () => <DrawerBasic />,
};

export const LeftDrawer: Story = {
  render: () => <DrawerLeft />,
};

export const TopDrawer: Story = {
  render: () => <DrawerTop />,
};

export const BottomDrawer: Story = {
  render: () => <DrawerBottom />,
};
