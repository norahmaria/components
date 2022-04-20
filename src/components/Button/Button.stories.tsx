import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Button as ButtonComponent } from '../'
import ButtonProps from './Button.types'

import { ReactComponent as Arrow } from '../../assets/Arrow_Down.svg'

export default {
  title: 'Inputs/Button',
  component: ButtonComponent,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    onButtonClick: {
      table: {
        category: 'Actions',
      },
    },
    children: {
      table: {
        category: 'Display',
      },
    },
    isLoading: {
      table: {
        category: 'State',
        default: false,
      },
    },
    round: {
      table: {
        category: 'Appearance',
      },
    },
    fullWidth: {
      table: {
        category: 'Appearance',
      },
    },
    disabled: {
      table: {
        category: 'State',
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    variant: {
      table: {
        category: 'Appearance',
      },
    },
    leftIcon: {
      control: false,
      table: {
        category: 'Display',
      },
    },
    rightIcon: {
      control: false,
      table: {
        category: 'Display',
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
    style: {
      control: false,
      table: {
        category: 'Extra Native Props',
      },
    },
    className: {
      table: {
        category: 'Extra Native Props',
      },
    },
    type: {
      table: {
        category: 'Extra Native Props',
      },
    },
  },
}

const ButtonStory: Story<ButtonProps> = args => (
  <ButtonComponent
    {...args}
    onButtonClick={e => {
      action('onButtonClick')(e)
    }}
  />
)

export const Button: Story<ButtonProps> = ButtonStory.bind({})
Button.args = {
  onButtonClick: clicked => {
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
  type: 'button',
  className: '',
}
