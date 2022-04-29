import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Button as ButtonComponent } from '../'
import ButtonProps from './Button.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

import { ReactComponent as Arrow } from '../../assets/Arrow_Down.svg'

const code = `<Button leftIcon={<Arrow />}>Hello World</Button>`

export default {
  title: 'Inputs/Button',
  component: ButtonComponent,
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
    onButtonClick: [Categories.Actions],
    children: [Categories.Display],
    isLoading: [Categories.State],
    round: [Categories.Appearance],
    fullWidth: [Categories.Appearance],
    disabled: [Categories.State],
    variant: [Categories.Appearance],
    leftIcon: [Categories.Display, true],
    rightIcon: [Categories.Display, true],
    type: [Categories.Native],
  }),
} as Meta

const ButtonStory: Story<ButtonProps> = args => (
  <ButtonComponent
    {...args}
    onButtonClick={e => {
      action('onButtonClick')(e)
    }}
  />
)

export const Button: Story<ButtonProps> = ButtonStory.bind({})
Button.args = {
  onButtonClick: clicked => {},
  children: 'Hello World',
  isLoading: false,
  round: false,
  fullWidth: false,
  disabled: false,
  variant: 'default',
  size: 'medium',
  color: 'primary',
  rightIcon: null,
  leftIcon: <Arrow />,
  type: 'button',
  className: '',
}
