import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { ReactComponent as Norway } from '../../assets/Norway.svg'
import { TextInput as TextInputComponent } from '../'
import TextInputProps from './TextInput.types'

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
  argTypes: {
    onTextInputChange: {
      table: {
        category: 'Actions',
      },
    },
    label: {
      table: {
        category: 'Display',
      },
    },
    placeholder: {
      table: {
        category: 'Display',
      },
    },
    characterLimit: {
      table: {
        category: 'State',
      },
    },
    status: {
      control: {
        type: 'object',
      },
      table: {
        category: 'Display',
      },
    },
    password: {
      table: {
        category: 'Appearance',
      },
    },
    textarea: {
      table: {
        category: 'Display',
      },
    },
    disabled: {
      table: {
        category: 'State',
      },
    },
    icon: {
      control: false,
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
}
