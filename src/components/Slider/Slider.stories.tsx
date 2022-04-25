import { Story } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Slider as SliderComponent } from '../'
import SliderProps from './Slider.types'

const code = `<Slider 
  label="Slider" 
  id="slider" 
  onSliderChange={(val, e) => action('onSliderChange)(val, e)}
/>`

export default {
  title: 'Inputs/Slider',
  component: SliderComponent,
  parameters: {
    badges: [BADGE.STABLE],
    docs: {
      source: {
        code,
        language: 'jsx',
      },
    },
  },
  argTypes: {
    label: {
      table: {
        category: 'Display',
      },
    },
    suffix: {
      table: {
        category: 'Display',
      },
    },
    prefix: {
      table: {
        category: 'Display',
      },
    },
    onSliderChange: {
      table: {
        category: 'Actions',
      },
    },
    defaultValue: {
      table: { category: 'State' },
      control: false,
    },
    className: {
      table: { category: 'Extra Native Props' },
    },
    style: {
      control: false,
      table: { category: 'Extra Native Props' },
    },
    min: {
      table: { category: 'Extra Native Props' },
    },
    max: {
      table: { category: 'Extra Native Props' },
    },
    step: {
      table: { category: 'Extra Native Props' },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    vertical: {
      table: {
        category: 'Appearance',
      },
    },
    size: {
      table: {
        category: 'Appearance',
      },
    },
    color: {
      table: {
        category: 'Appearance',
      },
    },
  },
}

const SliderStory: Story<SliderProps> = args => (
  <div style={{ width: '15rem' }}>
    <SliderComponent {...args} />
  </div>
)

export const Slider: Story<SliderProps> = SliderStory.bind({})
Slider.args = {
  min: 0,
  max: 100,
  defaultValue: 20,
  id: 'slider',
  label: 'Slider',
  className: '',
  disabled: false,
  size: 'medium',
  color: 'primary',
  step: 1,
  suffix: '',
  prefix: '',
  vertical: false,
}
