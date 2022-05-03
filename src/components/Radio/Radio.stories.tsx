import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import React from 'react'
import useForm from '../../hooks/useForm'

import { Radio as RadioComponent } from '../'
import RadioProps from './Radio.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

const code = `<Radio
  name="options"
  onRadioChange={value => action('onRadioChange')(value)}>
  {options.map(option => (
    <Radio.Button label={option.title} value={option.id}/>
  ))}
</Radio>`

export default {
  title: 'Inputs/Radio',
  component: RadioComponent,
  subcomponents: {
    'Radio.Button': RadioComponent.Button,
  },
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
    labelPlacement: [Categories.Appearance],
    children: [Categories.Display, true],
    horizontal: [Categories.Appearance],
    disabled: [Categories.State],
    value: [Categories.State, true],
  }),
} as Meta

const RadioStory: Story<RadioProps> = args => {
  const { onChange, form } = useForm({ Radio: 'hello' })

  return (
    <RadioComponent
      {...args}
      value={form.Radio}
      onChange={value => {
        onChange(value)
        action('onChange')(value)
      }}>
      <RadioComponent.Button label="One Button" value="hello" />
      <RadioComponent.Button label="Second Button" value="world" />
    </RadioComponent>
  )
}

export const Radio: Story<RadioProps> = RadioStory.bind({})
Radio.args = {
  name: 'Radio',
  labelPlacement: 'right',
  children: null,
  horizontal: false,
  disabled: false,
  size: 'medium',
  color: 'primary',
  className: '',
}
