import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Radio as RadioComponent } from '../'
import RadioProps from './Radio.types'

export default {
  title: 'Inputs/Radio',
  component: RadioComponent,
  subcomponents: {
    'Radio.Button': RadioComponent.Button,
  },
  parameters: {
    badges: [BADGE.STABLE],
  },
  argTypes: {
    onRadioChange: {
      table: {
        category: 'Actions',
      },
    },
    labelPlacement: {
      table: {
        category: 'Appearance',
      },
    },
    children: {
      control: false,
      table: {
        category: 'Display',
      },
    },
    horizontal: {
      table: {
        category: 'Appearance',
      },
    },
    disabled: {
      table: {
        category: 'State',
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

const RadioStory: Story<RadioProps> = args => (
  <RadioComponent
    {...args}
    onRadioChange={value => {
      action('onRadioChange')(value)
    }}>
    <RadioComponent.Button label="One Button" value="road" />
    <RadioComponent.Button label="Second Button" value="hello" />
  </RadioComponent>
)

export const Radio: Story<RadioProps> = RadioStory.bind({})
Radio.args = {
  onRadioChange: checked => {},
  name: 'Radio',
  labelPlacement: 'right',
  children: null,
  horizontal: false,
  disabled: false,
  size: 'medium',
  color: 'primary',
  defaultValue: 'road',
  className: '',
}
