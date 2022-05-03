import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import React from 'react'
import useForm from '../../hooks/useForm'

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
    onChange: [Categories.Actions, true],
    label: [Categories.Display],
    disabled: [Categories.State],
    value: [Categories.State, true],
  }),
} as Meta

const SwitchStory: Story<SwitchProps> = args => {
  const { onChange, form } = useForm({ switch: false })

  return (
    <SwitchComponent
      {...args}
      value={form.switch}
      onChange={e => {
        onChange(e)
        action('onChange')(e)
      }}
    />
  )
}

export const Switch: Story<SwitchProps> = SwitchStory.bind({})
Switch.args = {
  label: 'Switch',
  disabled: false,
  size: 'medium',
  color: 'primary',
  className: '',
  id: 'switch',
}
