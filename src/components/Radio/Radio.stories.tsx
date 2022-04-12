import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Radio as RadioComponent } from '../index'
import RadioProps from './Radio.types'

export default {
  title: 'Inputs/Radio',
  component: RadioComponent,
  subcomponents: {
    'Radio.Button': RadioComponent.Button,
  },
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
  argTypes: {
    onRadioChange: {
      description:
        'The function to call when the Radio value is changed, the parameter will give you the value of the selected Radio button',
      table: {
        category: 'Actions',
      },
    },
    name: {
      description: `A unique id used to group the Radio buttons together`,
    },
    labelPlacement: {
      description: 'Where to place the Radio buttons labels',
      table: {
        category: 'Appearance',
      },
    },
    children: {
      description:
        "The component expects you to use **Radio.Button** as it's children. They all need an `id`, `label` and `value`, and can be `disabled` individually.",
      control: false,
      table: {
        category: 'Display',
      },
    },
    horizontal: {
      description: 'Sets the Radio buttons on an horizontal line if true',
      table: {
        category: 'Appearance',
      },
    },
    disabled: {
      description: 'Sets the Radio button group to be disabled or not',
      table: {
        category: 'State',
      },
    },
    size: {
      description: 'The size of the Radio buttons',
      table: {
        category: 'Appearance',
      },
    },
    color: {
      description: 'The color scheme of the Radio buttons',
      table: {
        category: 'Appearance',
      },
    },
  },
}

const RadioStory: Story<RadioProps> = args => (
  <RadioComponent
    {...args}
    onRadioChange={value => {
      action('onRadioChange')(value)
    }}>
    <RadioComponent.Button id="road" label="One Button" value="road" />
    <RadioComponent.Button id="hello" label="Second Button" value="hello" />
  </RadioComponent>
)

export const Radio: Story<RadioProps> = RadioStory.bind({})
Radio.args = {
  onRadioChange: checked => {},
  name: 'Radio',
  labelPlacement: 'right',
  children: null,
  horizontal: false,
  disabled: false,
  size: 'medium',
  color: 'primary',
}
