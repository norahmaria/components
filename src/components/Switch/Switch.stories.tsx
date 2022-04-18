import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { ReactComponent as Norway } from '../../assets/Norway.svg'
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
        'The function to call when the switch changes, the parameter will give you the value',
      table: {
        category: 'Actions',
      },
    },
    disabled: {
      description: 'Set input to be disabled or not',
      table: {
        category: 'State',
      },
    },
    icon: {
      description: 'Icon for the input',
      control: false,
      table: {
        category: 'Display',
      },
    },
    isLoading: {
      description: 'Is the input loading or not',
      table: {
        category: 'State',
        default: false,
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
  },
}

const SwitchStory: Story<SwitchProps> = args => <SwitchComponent {...args} />

export const Switch: Story<SwitchProps> = SwitchStory.bind({})
Switch.args = {
  onSwitchChange: e => {
    action('onSwitchChange')(e)
  },
  label: 'Switch',
  // icon: <Norway />,
  disabled: false,
  // round: false,
  size: 'medium',
  color: 'primary',
  // isLoading: false,
}
