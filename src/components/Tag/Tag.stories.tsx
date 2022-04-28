import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React, { useState } from 'react'

import { Tag as TagComponent } from '..'
import TagProps from './Tag.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

const code = `<div
  style={{
    width: '20rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  }}>
  {tags.map((tag, idx) => (
    <Tag 
      color={tag.customColor || 'primary'} 
      onClick={e => action('onClick')(e)} 
      onDelete={e => action('onDelete')(e)} 
      key={idx}
    >
      {tag.character}
    </Tag>
  ))}
  
  <Tag.Add
    id="tag-add"
    onAdd={(val, e) => action('onAdd')(val, e)}
    placeholder="New"
  />
</div>
`

export default {
  title: 'Data Display/Tag',
  component: TagComponent,
  subcomponents: {
    'Tag.Add': TagComponent.Add,
  },
  parameters: {
    badges: [BADGE.NEEDS_REVISION],
    docs: {
      source: {
        code,
        language: 'jsx',
      },
    },
  },
  argTypes: createArgTypesCategoryAndControls({
    onDelete: [Categories.Actions],
    onClick: [Categories.Actions],
    color: [Categories.Appearance, true],
    round: [Categories.Appearance],
    children: [Categories.Display, true],
    icon: [Categories.Display, true],
  }),
}

const TagStory: Story<TagProps> = args => {
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
        width: '20rem',
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.5rem',
      }}>
      {tags.map((tag, idx) => (
        <TagComponent color={tag.color || 'primary'} key={idx} {...args}>
          {tag.character}
        </TagComponent>
      ))}
      <TagComponent.Add
        size={args.size}
        id="tag-add"
        onAdd={(val, e) => action('onAdd')(val, e)}
        placeholder="New"
        // characterLimit={80}
      />
    </div>
  )
}

export const Tag: Story<TagProps> = TagStory.bind({})
Tag.args = {
  size: 'medium',
  className: '',
  children: 'Tag',
  onClick: e => action('onClick')(e),
  onDelete: e => action('onDelete')(e),
  round: false,
  disabled: false,
}
