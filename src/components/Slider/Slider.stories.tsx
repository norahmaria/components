import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
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
}

const SliderStory: Story<SliderProps> = args => <SliderComponent {...args} />

export const Slider: Story<SliderProps> = SliderStory.bind({})
Slider.args = {}
