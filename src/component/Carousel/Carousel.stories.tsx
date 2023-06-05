import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import type { RadioChangeEvent } from 'antd';
import { Carousel, Radio } from 'antd';
import type { DotPosition } from 'antd/es/carousel';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};

const meta: Meta<typeof Carousel> = {
  title: 'Carousel',
  tags:['autodocs'],
  component: Carousel,
};


export default meta;

type Story = StoryObj<typeof Carousel>;

const CarouselBasic = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };
  return <>
        <Carousel afterChange={onChange}>
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
      </>
};

const CarouselDots = () => {
  const [dotPosition, setDotPosition] = useState<DotPosition>('top');

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };

  return <>
        <Radio.Group onChange={handlePositionChange} value={dotPosition} style={{ marginBottom: 8 }}>
        <Radio.Button value="top">Top</Radio.Button>
        <Radio.Button value="bottom">Bottom</Radio.Button>
        <Radio.Button value="left">Left</Radio.Button>
        <Radio.Button value="right">Right</Radio.Button>
      </Radio.Group>
      <Carousel dotPosition={dotPosition}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
};



const AutomaticallyScroll = () => {
  return <>
        <Carousel autoplay>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </>
};


const CarouseFadein = () => {
  return <>
        <Carousel effect="fade">
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
      </>
};

export const BasicCarousel: Story ={
  render: () => <CarouselBasic />,
}

export const DotsCarousel: Story ={
  render: () => <CarouselDots />,
}

export const ScrollAutomatically: Story ={
  render: () => <AutomaticallyScroll />,
}

export const FadeinCarouse: Story ={
  render: () => <CarouseFadein />,
}

