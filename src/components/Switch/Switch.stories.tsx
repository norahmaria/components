import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Switch as SwitchComponent } from '../'
import SwitchProps from './Switch.types'

export default {
  title: 'Inputs/Switch',
  component: SwitchComponent,
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    onSwitchChange: {
      table: {
        category: 'Actions',
      },
    },
    label: {
      table: {
        category: 'Display',
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

const SwitchStory: Story<SwitchProps> = args => <SwitchComponent {...args} />

export const Switch: Story<SwitchProps> = SwitchStory.bind({})
Switch.args = {
  onSwitchChange: e => {
    action('onSwitchChange')(e)
  },
  label: 'Switch',
  disabled: false,
  size: 'medium',
  color: 'primary',
  className: '',
  defaultValue: false,
  id: 'switch',
}
