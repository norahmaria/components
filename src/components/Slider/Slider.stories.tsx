import { Story } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Slider as SliderComponent } from '../'
import SliderProps from './Slider.types'

export default {
  title: 'Inputs/Slider',
  component: SliderComponent,
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
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

const SliderStory: Story<SliderProps> = args => <SliderComponent {...args} />

export const Slider: Story<SliderProps> = SliderStory.bind({})
Slider.args = {
  min: 0,
  max: 100,
  defaultValue: 20,
  id: 'slider',
  label: 'Slider',
  style: { width: '15rem' },
  className: '',
  disabled: false,
  size: 'medium',
  color: 'primary',
  step: 1,
  suffix: '',
  prefix: '',
}
