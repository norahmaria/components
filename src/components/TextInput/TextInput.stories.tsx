import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { ReactComponent as Norway } from '../../assets/Norway.svg'
import { TextInput as TextInputComponent } from '../'
import TextInputProps from './TextInput.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

const code = `<TextInput 
  id="text-input"
  label="Text Input"
  placeholder="Placeholder.."
  onTextInputChange={(val, e) => action('onTextInputChange)(val, e)}
  icon={<Norway />}
/>`

export default {
  title: 'Inputs/Text Input',
  component: TextInputComponent,
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
    onTextInputChange: [Categories.Actions],
    label: [Categories.Display],
    placeholder: [Categories.Display],
    characterLimit: [Categories.State],
    status: [Categories.Display],
    password: [Categories.Appearance],
    textarea: [Categories.Display],
    disabled: [Categories.State],
    icon: [Categories.Display, true],
    isLoading: [Categories.State],
    round: [Categories.Appearance],
    defaultValue: [Categories.State],
  }),
} as Meta

const TextInputStory: Story<TextInputProps> = args => (
  <TextInputComponent {...args} />
)

export const TextInput: Story<TextInputProps> = TextInputStory.bind({})
TextInput.args = {
  onTextInputChange: e => {
    action('onTextInputChange')(e)
  },
  label: 'Text Input',
  placeholder: 'Placeholder..',
  status: null,
  icon: <Norway />,
  id: 'text-input',
  disabled: false,
  round: false,
  size: 'medium',
  color: 'primary',
  isLoading: false,
  characterLimit: null,
  password: false,
  textarea: false,
  defaultValue: '',
  className: '',
}
