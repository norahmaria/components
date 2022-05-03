import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import React from 'react'
import useForm from '../../hooks/useForm'

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
    onChange: [Categories.Actions, true],
    value: [Categories.State, true],
    min: [Categories.Native],
    max: [Categories.Native],
    step: [Categories.Native],
    disabled: [Categories.State],
    vertical: [Categories.Appearance],
  }),
} as Meta

const SliderStory: Story<SliderProps> = args => {
  const { onChange, form } = useForm({ slider: 20 })

  return (
    <div style={{ width: '15rem' }}>
      <SliderComponent
        {...args}
        value={form.slider}
        onChange={e => {
          onChange(e)
          action('onChange')(e)
        }}
      />
    </div>
  )
}

export const Slider: Story<SliderProps> = SliderStory.bind({})
Slider.args = {
  min: 0,
  max: 100,
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
