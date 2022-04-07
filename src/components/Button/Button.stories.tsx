import { Story } from '@storybook/react'
import React from 'react'

import { Button } from '../../components'
import ButtonProps from './Button.types'
import hideControls from '../../helpers/storybook/hideControls'

import { ReactComponent as Arrow } from '../../assets/Arrow_Down.svg'

const hiddenProperties = hideControls(['rightIcon', 'leftIcon', 'onClick'])

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
    ...hiddenProperties,
  },
}

const ButtonStory: Story<ButtonProps> = args => <Button {...args} />

const sharedArgs: ButtonProps = {
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
}

export const Default: Story<ButtonProps> = ButtonStory.bind({})
Default.args = {
  ...sharedArgs,
  variant: 'default',
}

export const Secondary: Story<ButtonProps> = ButtonStory.bind({})
Secondary.args = {
  ...sharedArgs,
  variant: 'secondary',
}

export const Outlined: Story<ButtonProps> = ButtonStory.bind({})
Outlined.args = {
  ...sharedArgs,
  variant: 'outlined',
}

export const Disabled: Story<ButtonProps> = ButtonStory.bind({})
Disabled.args = {
  ...sharedArgs,
  variant: 'default',
  disabled: true,
}

export const Loading: Story<ButtonProps> = ButtonStory.bind({})
Loading.args = {
  ...sharedArgs,
  variant: 'default',
  isLoading: true,
}
