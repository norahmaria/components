import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { ReactComponent as Norway } from '../../assets/Norway.svg'
import { TextInput as TextInputComponent } from '../'
import TextInputProps from './TextInput.types'

export default {
  title: 'Inputs/Text Input',
  component: TextInputComponent,
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
  argTypes: {
    onTextInputChange: {
      description:
        'The function to call when text input changes, the parameter will give you the value of the input',
      table: {
        category: 'Actions',
      },
    },
    label: {
      description: 'The select label',
      table: {
        category: 'Display',
      },
    },
    placeholder: {
      description: 'The placeholder text',
      table: {
        category: 'Display',
      },
    },
    id: {
      description: `The unique id to use for the input and for the label for attribute`,
    },
    status: {
      description: 'Error or warning messages',
      control: {
        type: 'object',
      },
      table: {
        category: 'Display',
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
    round: {
      description: 'Use more rounded corners on the button or not',
      table: {
        category: 'Appearance',
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

const TextInputStory: Story<TextInputProps> = args => (
  <div style={{ width: '18rem' }}>
    <TextInputComponent {...args} />
  </div>
)

export const TextInput: Story<TextInputProps> = TextInputStory.bind({})
TextInput.args = {
  onTextInputChange: e => {
    action('onTextInputChange')(e)
  },
  label: 'Text Input',
  placeholder: 'Placeholder..',
  status: {
    type: 'warning',
    message:
      'Your username can not exceed 50 characters, and can not include special symbols.',
  },
  icon: <Norway />,
  id: 'text-input',
  disabled: false,
  round: false,
  size: 'medium',
  color: 'primary',
  isLoading: false,
}
