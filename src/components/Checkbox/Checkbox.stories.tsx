import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../'
import CheckboxProps from './Checkbox.types'

export default {
  title: 'Inputs/Checkbox',
  component: CheckboxComponent,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    onCheckboxChange: {
      description:
        'The function to call when checkbox is changed, the parameter will give you the value of the checkbox',
      table: {
        category: 'Actions',
      },
    },
    label: {
      description: 'The checkbox label',
      table: {
        category: 'Display',
      },
    },
    labelPlacement: {
      description: 'Where to place the checkbox label',
      table: {
        category: 'Appearance',
      },
    },
    id: {
      description: `The unique id to use for the checkbox and for the label for attribute`,
    },
    disabled: {
      description: 'Sets the checkbox to be disabled or not',
      table: {
        category: 'State',
      },
    },
    size: {
      description: 'The size of the checkbox and label',
      table: {
        category: 'Appearance',
      },
    },
    color: {
      description: 'The color scheme of the checkbox',
      table: {
        category: 'Appearance',
      },
    },
  },
}

const CheckboxStory: Story<CheckboxProps> = args => (
  <CheckboxComponent
    {...args}
    onCheckboxChange={checked => {
      action('onCheckboxChange')(checked)
    }}
  />
)

export const Checkbox: Story<CheckboxProps> = CheckboxStory.bind({})
Checkbox.args = {
  onCheckboxChange: checked => console.log(checked),
  label: 'Checkbox',
  labelPlacement: 'right',
  id: 'checkbox',
  disabled: false,
  size: 'medium',
  color: 'primary',
}
