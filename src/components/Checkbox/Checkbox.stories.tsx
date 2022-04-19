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
        'The function to call when checkbox is changed, the first argument will give you the value of the checkbox, while the second argument will give you the event, either the onChange for the input, or the keydown event (for checking with enter).',
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
    id: {
      description: `The unique id to use for the checkbox and for the label for attribute`,
    },
    labelPlacement: {
      description: 'Where to place the checkbox label',
      table: {
        category: 'Appearance',
      },
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
    defaultValue: {
      description: 'The default value of the checkbox',
      table: {
        category: 'State',
      },
    },
    className: {
      description: 'Add custom className',
      table: {
        category: 'Extra Native Props',
      },
    },
    style: {
      description: 'Add inline styling',
      control: false,
      table: {
        category: 'Extra Native Props',
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
  defaultValue: false,
  className: '',
}
