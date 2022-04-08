import { Story } from '@storybook/react'
import React from 'react'

import { Button as ButtonComponent } from '../../components'
import ButtonProps from './Button.types'
import hideControls from '../../helpers/storybook/hideControls'

import { ReactComponent as Arrow } from '../../assets/Arrow_Down.svg'

const hiddenProperties = hideControls(['rightIcon', 'leftIcon'])

export default {
  title: 'Button',
  argTypes: {
    size: {
      description: 'The size of the button',
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
      description: 'The color scheme of the button',
      table: {
        type: { summary: 'primary | neutral | success | warning | error' },
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
        options: ['primary', 'neutral', 'success', 'warning', 'error'],
      },
    },
    variant: {
      description: 'The variant of the button',
      table: {
        type: { summary: 'default | secondary | outlined' },
        defaultValue: { summary: 'default' },
      },
      control: {
        type: 'select',
        options: ['default', 'secondary', 'outlined'],
      },
    },
    round: {
      description: 'Use more rounded corners on the button or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullWidth: {
      description: 'Let the button take up the space it has around it',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    children: {
      description: 'The content inside the button',
      table: {
        type: { summary: 'React.ReactNode' },
      },
    },
    disabled: {
      description: 'Whether to disable the button or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isLoading: {
      description: 'Is button loading or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onClick: {
      description:
        'The function to call when the button is clicked, the parameter will give you the event',
      table: {
        type: {
          summary:
            '(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void',
        },
      },
    },
    ...hiddenProperties,
  },
}

const ButtonStory: Story<ButtonProps> = args => <ButtonComponent {...args} />

export const Button: Story<ButtonProps> = ButtonStory.bind({})
Button.args = {
  children: 'Hello World',
  rightIcon: null,
  leftIcon: <Arrow />,
  size: 'medium',
  fullWidth: false,
  color: 'primary',
  round: false,
  onClick: clicked => {
    console.log(clicked)
  },
  variant: 'default',
  disabled: false,
  isLoading: false,
}
