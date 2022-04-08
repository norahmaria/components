import { Story } from '@storybook/react'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../../components'
import CheckboxProps from './Checkbox.types'

export default {
  title: 'Checkbox',
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
    onCheckboxChange: {
      description:
        'The function to call when checkbox is changed, the parameter will give you the value of the checkbox',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    // variant: {
    //   description: 'The variant of the button',
    //   table: {
    //     type: { summary: 'default | secondary | outlined' },
    //     defaultValue: { summary: 'default' },
    //   },
    //   control: {
    //     type: 'select',
    //     options: ['default', 'secondary', 'outlined'],
    //   },
    // },
    round: {
      description: 'Use rounded corners on the checkbox or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
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
  color: 'success',
  size: 'small',
  disabled: false,
  round: false,
  onCheckboxChange: checked => console.log(checked),
}
