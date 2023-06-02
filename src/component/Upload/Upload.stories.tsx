import type { Meta, StoryObj } from '@storybook/react';
import { UploadOutlined, InboxOutlined  } from '@ant-design/icons';
import { UploadProps, Button, message, Upload } from 'antd';
import type { UploadFile } from 'antd/es/upload/interface';

const { Dragger } = Upload;

const props: UploadProps = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const fileList: UploadFile[] = [
    {
      uid: '0',
      name: 'xxx.png',
      status: 'uploading',
      percent: 33,
    },
    {
      uid: '-1',
      name: 'yyy.png',
      status: 'done',
      url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'zzz.png',
      status: 'error',
    },
  ];

const meta: Meta<typeof Upload> = {
  title: 'Upload',
  tags:['autodocs'],
  component: Upload,
};

export default meta;

type Story = StoryObj<typeof Upload>;

export const BasicUpload: Story = {
  args:{
   children:<><Button icon={<UploadOutlined/>}>Click to Upload</Button></>,
  } ,
};

export const DragAndDrop: Story = {
    args:{
     children:<Dragger {...props}><p className='ant-upload-drag-icon'><InboxOutlined/></p><p className="ant-upload-text">Click or drag file to this area to upload</p><p className="ant-upload-hint">
     Support for a single or bulk upload. Strictly prohibited from uploading company data or other banned files.</p></Dragger>,
     style:{width:'100%'},
    } ,
};

export const UploadPreview: Story = {
    args:{
     action:'https://www.mocky.io/v2/5cc8019d300000980a055e76',
     listType:'picture',
     defaultFileList:(fileList),
     children:<Button icon={<UploadOutlined/>}>Click to Upload</Button>,
    } ,
};

export const UploadMax3: Story = {
    args:{
        action:'https://www.mocky.io/v2/5cc8019d300000980a055e76',
        listType:'picture',
        maxCount:3,
        children:<Button icon={<UploadOutlined/>}>Click to Upload</Button>,
    } ,
  };
  