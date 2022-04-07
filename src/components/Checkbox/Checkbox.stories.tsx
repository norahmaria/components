import { Story } from '@storybook/react'
import React from 'react'

import { Checkbox } from '../../components'
import CheckboxProps from './Checkbox.types'

export default {
  title: 'Checkbox',
  argTypes: {
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
  },
}

const CheckboxStory: Story<CheckboxProps> = args => <Checkbox {...args} />

export const Default: Story<CheckboxProps> = CheckboxStory.bind({})
Default.args = {
  label: 'hello',
  color: 'success',
  onCheckboxChange: checked => console.log(checked),
}
