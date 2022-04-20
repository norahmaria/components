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
      table: {
        category: 'Actions',
      },
    },
    label: {
      table: {
        category: 'Display',
      },
    },
    labelPlacement: {
      table: {
        category: 'Appearance',
      },
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
    defaultValue: {
      table: {
        category: 'State',
      },
    },
    className: {
      table: {
        category: 'Extra Native Props',
      },
    },
    style: {
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
