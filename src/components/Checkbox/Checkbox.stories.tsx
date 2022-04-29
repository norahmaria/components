import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Checkbox as CheckboxComponent } from '../'
import CheckboxProps from './Checkbox.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

const code = `<Checkbox 
  id="checkbox-one" 
  label="Checkbox" 
  onCheckboxChange={() => action('onCheckboxChange')} 
/>`

export default {
  title: 'Inputs/Checkbox',
  component: CheckboxComponent,
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
    onCheckboxChange: [Categories.Actions],
    label: [Categories.Display],
    labelPlacement: [Categories.Appearance],
    disabled: [Categories.State],
    defaultValue: [Categories.State],
  }),
} as Meta

const CheckboxStory: Story<CheckboxProps> = args => (
  <CheckboxComponent
    {...args}
    onCheckboxChange={checked => {
      action('onCheckboxChange')(checked)
    }}
  />
)

export const Checkbox: Story<CheckboxProps> = CheckboxStory.bind({})
Checkbox.args = {
  onCheckboxChange: checked => console.log(checked),
  label: 'Checkbox',
  labelPlacement: 'right',
  id: 'checkbox',
  disabled: false,
  size: 'medium',
  color: 'primary',
  defaultValue: false,
  className: '',
}
