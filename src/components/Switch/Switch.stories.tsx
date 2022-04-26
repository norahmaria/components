import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Switch as SwitchComponent } from '../'
import SwitchProps from './Switch.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

const code = `<Switch 
  label="Switch"
  id="switch" 
  onSwitchChange={(val, e) => action('onSwitchChange')(val, e)}
/>`

export default {
  title: 'Inputs/Switch',
  component: SwitchComponent,
  parameters: {
    badges: [BADGE.STABLE],
    docs: {
      source: {
        code,
        language: 'jsx',
      },
    },
  },
  argTypes: createArgTypesCategoryAndControls({
    onSwitchChange: [Categories.Actions],
    label: [Categories.Display],
    disabled: [Categories.State],
    defaultValue: [Categories.State],
  }),
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
