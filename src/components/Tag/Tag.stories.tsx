import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React, { useState } from 'react'

import { Tag as TagComponent } from '..'
import TagProps from './Tag.types'

export default {
  title: 'Data Display/Tags',
  component: TagComponent,
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
    // docs: {
    //   source: {
    //     code: 'const Tags () => hello world',
    //     language: 'jsx',
    //     dark: false,
    //   },
    // },
  },
  argTypes: {
    onDelete: {
      table: {
        category: 'Actions',
      },
    },
    onClick: {
      table: {
        category: 'Actions',
      },
    },
    color: {
      control: false,
      table: {
        category: 'Appearance',
      },
    },
    size: {
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

const TagsStory: Story<TagProps> = args => {
  const cast: any[] = [
    { actor: 'Rachel Brosnahan', character: 'Miriam Maisel', color: 'primary' },
    { actor: 'Alex Borstein', character: 'Susie Myerson', color: 'success' },
    { actor: 'Michael Zegen', character: 'Joel Maisel', color: 'error' },
    { actor: 'Marin Hinkle', character: 'Rose Weissman', color: 'warning' },
    { actor: 'Tony Shalhoub', character: 'Abe Weissman', color: 'error' },
    { actor: 'Caroline Aaron', character: 'Shirley Maisel', color: 'warning' },
    { actor: 'Kevin Pollak', character: 'Moishe Maisel', color: 'success' },
    { actor: 'Luke Kirby', character: 'Lenny Bruce', color: 'primary' },
    { actor: 'Leroy McClain', character: 'Shy Baldwin', color: 'primary' },
  ]

  const [tags, setTags] = useState(cast)

  return (
    <div
      style={{
        width: '18rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
      {tags.map((tag, idx) => (
        <TagComponent color={tag.color || 'primary'} {...args}>
          {/* {tag.character} */}
          {args.children}
        </TagComponent>
      ))}
    </div>
  )
}

export const Tags: Story<TagProps> = TagsStory.bind({})
Tags.args = {
  size: 'medium',
  className: '',
  children: 'Tag',
  onClick: e => action('onClick')(e),
  onDelete: null,
}
