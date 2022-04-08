import { Story } from '@storybook/react'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../../components'
import CheckboxProps from './Checkbox.types'

export default {
  title: 'Inputs/Checkbox',
  argTypes: {
    size: {
      description: 'The size of the checkbox and label',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    color: {
      description: 'The color scheme of the checkbox',
      table: {
        type: { summary: 'primary | neutral | success | warning | error' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'neutral', 'success', 'warning', 'error'],
      },
    },
    label: {
      description: 'The checkbox label',
      table: {
        type: { summary: 'string' },
      },
    },
    labelPlacement: {
      description: 'Where to place the checkbox label',
      table: {
        type: { summary: 'top | right | bottom | left' },
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    onCheckboxChange: {
      description:
        'The function to call when checkbox is changed, the parameter will give you the value of the checkbox',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    id: {
      description: `The unique id to use for the checkbox and for the label for attribute`,
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'Sets the checkbox to be disabled or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
}

const CheckboxStory: Story<CheckboxProps> = args => (
  <CheckboxComponent {...args} />
)

export const Checkbox: Story<CheckboxProps> = CheckboxStory.bind({})
Checkbox.args = {
  label: 'Checkbox',
  labelPlacement: 'right',
  color: 'primary',
  size: 'medium',
  disabled: false,
  id: 'checkbox',
  onCheckboxChange: checked => console.log(checked),
}
