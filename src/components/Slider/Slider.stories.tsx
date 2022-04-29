import { Meta, Story } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Slider as SliderComponent } from '../'
import SliderProps from './Slider.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

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
  argTypes: createArgTypesCategoryAndControls({
    label: [Categories.Display],
    suffix: [Categories.Display],
    prefix: [Categories.Display],
    onSliderChange: [Categories.Actions],
    defaultValue: [Categories.State, true],
    min: [Categories.Native],
    max: [Categories.Native],
    step: [Categories.Native],
    disabled: [Categories.State],
    vertical: [Categories.Appearance],
  }),
} as Meta

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
