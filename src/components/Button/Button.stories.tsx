import { Story } from '@storybook/react'
import React from 'react'

import { Button } from '../../components'
import ButtonProps from './Button.types'

import { ReactComponent as Arrow } from '../../assets/Arrow_Down.svg'

export default {
  title: 'Button',
}

const ButtonStory: Story<ButtonProps> = args => <Button {...args} />

export const Default: Story<ButtonProps> = ButtonStory.bind({})
Default.args = {
  children: 'Hello World',
  rightIcon: null,
  leftIcon: <Arrow />,
  size: 'medium',
  fullWidth: false,
  color: 'primary',
  variant: 'default',
  round: false,
  isLoading: false,
  disabled: false,
  onClick: () => {
    console.log('has been clickedd')
  },
}
