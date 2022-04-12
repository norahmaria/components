import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Button as ButtonComponent } from '../../components'
import ButtonProps from './Button.types'

import { ReactComponent as Arrow } from '../../assets/Arrow_Down.svg'

export default {
  title: 'Button',
  component: ButtonComponent,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    onClick: {
      description:
        'The function to call when the button is clicked, the parameter will give you the event',
      table: {
        category: 'Actions',
      },
    },
    children: {
      description: 'The content inside the button',
      table: {
        category: 'Display',
      },
    },
    isLoading: {
      description: 'Is button loading or not',
      table: {
        category: 'State',
        default: false,
      },
    },
    round: {
      description: 'Use more rounded corners on the button or not',
      table: {
        category: 'Appearance',
      },
    },
    fullWidth: {
      description: 'Let the button take up the space it has around it',
      table: {
        category: 'Appearance',
      },
    },
    disabled: {
      description: 'Whether to disable the button or not',
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    variant: {
      description: 'The variant of the button',
      table: {
        category: 'Appearance',
      },
    },
    leftIcon: {
      description: 'Icon on the left',
      control: false,
      table: {
        category: 'Display',
      },
    },
    rightIcon: {
      description: 'Icon on the left',
      control: false,
      table: {
        category: 'Display',
      },
    },
    size: {
      description: 'The size of the button',
      table: {
        category: 'Appearance',
      },
    },
    color: {
      description: 'The color scheme of the button',
      table: {
        category: 'Appearance',
      },
    },
  },
}

const ButtonStory: Story<ButtonProps> = args => (
  <ButtonComponent
    {...args}
    onClick={e => {
      action('onClick')(e)
    }}
  />
)

export const Button: Story<ButtonProps> = ButtonStory.bind({})
Button.args = {
  onClick: clicked => {
    console.log(clicked)
  },
  children: 'Hello World',
  isLoading: false,
  round: false,
  fullWidth: false,
  disabled: false,
  variant: 'default',
  size: 'medium',
  color: 'primary',
  rightIcon: null,
  leftIcon: <Arrow />,
}
