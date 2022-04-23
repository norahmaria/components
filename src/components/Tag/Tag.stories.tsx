import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Tag as TagComponent } from '../'
import TagProps from './Tag.types'

export default {
  title: 'Data Display/Tag',
  component: TagComponent,
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
  },
  argTypes: {
    label: {
      table: {
        category: 'Display',
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

const TagStory: Story<TagProps> = args => <TagComponent {...args} />

export const Tag: Story<TagProps> = TagStory.bind({})
Tag.args = {
  label: 'Tag',
  disabled: false,
  size: 'medium',
  color: '#ff0000',
  className: '',
}
