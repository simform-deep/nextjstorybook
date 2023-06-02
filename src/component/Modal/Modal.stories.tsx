import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button, Modal } from 'antd';

const meta: Meta<typeof Modal> = {
  title: 'Modal',
  tags:['autodocs'],
  component: Modal,
};

export default meta;

type Story = StoryObj<typeof Modal>;

const BasicModal = () => {
    // Sets the hooks for both the label and primary props
    const [isModalOpen, setIsModalOpen] = useState(false);
  
    // Sets a click handler to change the label's value
    const showModal = () => {
        setIsModalOpen(true);
      };
    
      const handleOk = () => {
        setIsModalOpen(false);
      };
    
      const handleCancel = () => {
        setIsModalOpen(false);
      };
    return <>
            <Button type="primary" onClick={showModal}>
            Open Modal
            </Button>
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
            </Modal>
        </>
};

const CustomFooterModal = () => {
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return <>
      <Button type="primary" onClick={showModal}>
        Customized footer
      </Button>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            Submit
          </Button>,
          <Button
            key="link"
            href="https://google.com"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Search on Google
          </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
        </>
};

const VerticallyCenteredModal = () => {
    const [modalCenter, setModalCenter] = useState(false);
    return <>
      <Button type="primary" onClick={() => setModalCenter(true)}>
        Vertically Centered
      </Button>
      <Modal
        title="Vertically Centered"
        centered
        open={modalCenter}
        onOk={() => setModalCenter(false)}
        onCancel={() => setModalCenter(false)}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>
    </>
};

const AsynchronouslyClose = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
  
    const showModal = () => {
      setOpen(true);
    };
  
    const handleOk = () => {
      setModalText('The modal will be closed after two seconds');
      setConfirmLoading(true);
      setTimeout(() => {
        setOpen(false);
        setConfirmLoading(false);
      }, 2000);
    };
  
    const handleCancel = () => {
      console.log('Clicked cancel button');
      setOpen(false);
    };
    return <>
        <Button type="primary" onClick={showModal}>
        Open Modal with async logic
      </Button>
      <Modal
        title="Title"
        open={open}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
      </Modal>
    </>
}


export const Basic: Story = {
    render: () => <BasicModal />,
};

export const CustomizedFooter: Story = {
    render: () => <CustomFooterModal />,
};

export const VerticallyCentered: Story = {
    render: () => <VerticallyCenteredModal />,
};

export const Asynchronous: Story ={
    render: () => <AsynchronouslyClose />,
}