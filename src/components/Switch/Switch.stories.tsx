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
    badges: [BADGE.NEEDS_REVISION],
  },
  argTypes: {
    onSwitchChange: {
      description:
        'The function to call when the switch changes, the first argument will give you the value, while the second will give you either a change event or a keyboard event.',
      table: {
        category: 'Actions',
      },
    },
    label: {
      description: 'The switch label',
      table: {
        category: 'Display',
      },
    },
    id: {
      description: `The unique id to use for the switch and for the label for attribute`,
    },
    disabled: {
      description: 'Set input to be disabled or not',
      table: {
        category: 'State',
      },
    },
    size: {
      description: 'The size of the select',
      table: {
        category: 'Appearance',
      },
    },
    color: {
      description: 'The color scheme of the Select',
      table: {
        category: 'Appearance',
      },
    },
    defaultValue: {
      description: 'The default value',
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
