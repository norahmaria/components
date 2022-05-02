import React from 'react'
import { action } from '@storybook/addon-actions'
import { Meta, Story } from '@storybook/react'
import useForm from '../hooks/useForm'

import {
  Button,
  Checkbox,
  Radio,
  Select,
  Slider,
  Switch,
  Tag,
  TextInput,
} from '../components'

export default {
  title: 'Example/Form',
  argTypes: {
    size: {
      description: 'Size of the components',
      table: {
        type: { summary: `"small" | "medium" | "large"` },
        defaultValue: { summary: 'medium' },
      },
      control: {
        options: ['small', 'medium', 'large'],
        type: 'radio',
      },
    },
    color: {
      description: 'Color of the components',
      table: {
        type: {
          summary: `"primary" | "neutral" | "success" | "warning" | "error"`,
        },
        defaultValue: { summary: 'primary' },
      },
      control: {
        options: ['primary', 'neutral', 'success', 'warning', 'error'],
        type: 'radio',
      },
    },
  },
} as Meta

const FormStory: Story<any> = args => {
  const { form, onChange, onSelectionChange, onAddTag } = useForm({
    name: '',
    country: '',
    gender: '',
    cries: 15,
    darkMode: false,
    notifications: false,
    tags: [
      { text: 'A tag', color: 'error' },
      { text: 'Another Tag', color: 'success' },
      { text: 'Three Tags', color: 'warning' },
    ],
    newsletter: false,
  })

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    action('onButtonClick')(e)
  }

  return (
    <form style={{ display: 'grid', gap: '2rem', width: '30rem' }}>
      <div style={{ display: 'grid', gap: '1.5rem', width: '30rem' }}>
        <h1 className="okay">Example Form</h1>

        <TextInput
          label="Name"
          placeholder="Jane Doe"
          id="name"
          value={form.name}
          onTextInputChange={e => {
            onChange(e as React.ChangeEvent<HTMLInputElement>)
            action('onTextInputChange')(e)
          }}
          {...args}
          characterLimit={10}
        />

        <Select
          id="country"
          label="Country"
          placeholder="Select a country"
          value={form.country}
          onSelectionChange={e => {
            onSelectionChange(true)(e)
            action('onSelectionChange')(e)
          }}
          {...args}>
          <Select.Option value="no">Norway</Select.Option>
          <Select.Option value="se">Sweden</Select.Option>

          <Select.Group title="Europe">
            <Select.Option value="sa">Spain</Select.Option>
            <Select.Option value="uk">England</Select.Option>
            <Select.Option value="fr">France</Select.Option>
          </Select.Group>
        </Select>
      </div>

      <Radio
        label="Gender"
        name="gender"
        value={form.gender}
        onRadioChange={e => {
          onChange(e)
          action('onRadioChange')(e)
        }}
        horizontal
        {...args}>
        <Radio.Button label="She/Her" value="she/her" />
        <Radio.Button label="He/Him" value="he/him" />
        <Radio.Button label="They/Them" value="they/them" />
        <Radio.Button label="Xe/Xem" value="xe/xem" />
        <Radio.Button label="Fae/Faer" value="Fae/Faer" />
        <Radio.Button label="Ze/Zir" value="ze/zir" />
        <Radio.Button label="Neopronouns" value="neopronouns" />
        <Radio.Button label="Genderfluid" value="Genderfluid" />
      </Radio>

      <Slider
        id="cries"
        label="How many times a week do you cry because of CSS?"
        onSliderChange={e => {
          onChange(e)
          action('onSliderChange')(e)
        }}
        min={0}
        max={50}
        value={form.cries}
        {...args}
      />

      <div style={{ display: 'grid', gap: '1.5rem', width: '30rem' }}>
        <Switch
          label="Dark Mode"
          id="darkMode"
          value={form.darkMode}
          onSwitchChange={e => {
            onChange(e)
            action('onSwitchChange')(e)
          }}
          {...args}
        />
        <Switch
          label="Notifications"
          id="notifications"
          value={form.notifications}
          onSwitchChange={e => {
            onChange(e)
            action('onSwitchChange')(e)
          }}
          {...args}
        />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '0.5rem',
          flexWrap: 'wrap',
          width: '30rem',
        }}>
        {form.tags.map(tag => (
          <Tag {...args} color={tag.color} key={tag.text}>
            {tag.text}
          </Tag>
        ))}

        <Tag.Add
          {...args}
          id="tags"
          placeholder="New Tag"
          onAdd={e => {
            onAddTag('text')(e)
            action('onAddTag')(e)
          }}
          value={form.addingTag}
          characterLimit={100}
          {...args}
        />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '1.5rem',
          alignItems: 'center',
          width: '30rem',
        }}>
        <Button onButtonClick={onButtonClick} {...args}>
          Submit
        </Button>

        <Checkbox
          id="newsletter"
          label="I want to recieve newsletters"
          value={form.newsletter}
          onCheckboxChange={e => {
            onChange(e)
            action('onCheckboxChange')(e)
          }}
          {...args}
        />
      </div>
    </form>
  )
}

export const Form: Story<any> = FormStory.bind({})
Form.args = {
  size: 'medium',
  color: 'primary',
}
