import { Story } from '@storybook/react'
import React from 'react'

import { Radio as RadioComponent } from '..'
import RadioProps from './Radio.types'

export default {
  title: 'Inputs/Radio',
  argTypes: {
    size: {
      description: 'The size of the Radio buttons',
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
      description: 'The color scheme of the Radio buttons',
      table: {
        type: { summary: 'primary | neutral | success | warning | error' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'neutral', 'success', 'warning', 'error'],
      },
    },
    labelPlacement: {
      description: 'Where to place the Radio buttons labels',
      table: {
        type: { summary: 'top | right | bottom | left' },
        defaultValue: { summary: 'right' },
      },
      control: {
        type: 'select',
        options: ['top', 'right', 'bottom', 'left'],
      },
    },
    onRadioChange: {
      description:
        'The function to call when the Radio value is changed, the parameter will give you the value of the selected Radio button',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    name: {
      description: `A unique id used to group the Radio buttons together`,
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      description: 'Sets the Radio button group to be disabled or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    horizontal: {
      description: 'Sets the Radio buttons on an horizontal line if true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: `The component expects you to use Radio.Button as it's children. They all need an id, label and value, and can be disabled individually.`,
      table: {
        type: {
          summary: `custom`,
        },
      },
    },
  },
}

const RadioStory: Story<RadioProps> = args => (
  <RadioComponent {...args}>
    <RadioComponent.Button id="road" label="One Radio Button" value="road" />
    <RadioComponent.Button
      id="hello"
      label="Second Radio Button"
      value="hello"
    />
  </RadioComponent>
)

export const Radio: Story<RadioProps> = RadioStory.bind({})
Radio.args = {
  name: 'Radio',
  color: 'primary',
  size: 'medium',
  horizontal: false,
  onRadioChange: checked => {},
  labelPlacement: 'right',
  disabled: false,
}
