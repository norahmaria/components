import { Story } from '@storybook/react'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { TextInput as TextInputComponent } from '../'
import TextInputProps from './TextInput.types'

export default {
  title: 'Inputs/Text Input',
  component: TextInputComponent,
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
  argTypes: {},
}

const TextInputStory: Story<TextInputProps> = args => <TextInputComponent />

export const TextInput: Story<TextInputProps> = TextInputStory.bind({})
