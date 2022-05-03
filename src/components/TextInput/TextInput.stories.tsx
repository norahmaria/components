import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import React from 'react'
import useForm from '../../hooks/useForm'

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
    onChange: [Categories.Actions],
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
    value: [Categories.State, true],
  }),
} as Meta

const TextInputStory: Story<TextInputProps> = args => {
  const { onChange, form } = useForm({ text: '' })
  return (
    <TextInputComponent
      {...args}
      value={form.text}
      onChange={e => {
        onChange(e as React.ChangeEvent<HTMLInputElement>)
        action('onChange')(e)
      }}
    />
  )
}

export const TextInput: Story<TextInputProps> = TextInputStory.bind({})
TextInput.args = {
  label: 'Text Input',
  placeholder: 'Placeholder..',
  status: null,
  icon: <Norway />,
  id: 'text',
  disabled: false,
  round: false,
  size: 'medium',
  color: 'primary',
  isLoading: false,
  characterLimit: null,
  password: false,
  textarea: false,
  className: '',
}
