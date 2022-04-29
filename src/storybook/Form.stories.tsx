import React from 'react'
import { Meta, Story } from '@storybook/react'

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
  const onChange = (
    value: string | number | (string | number)[] | boolean,
    e?: any
  ) => {}

  const onAddTag = (
    value: string,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {}

  const onButtonClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {}

  return (
    <form style={{ display: 'grid', gap: '2rem', width: '30rem' }}>
      <div style={{ display: 'grid', gap: '1.5rem', width: '30rem' }}>
        <TextInput
          label="Name"
          placeholder="Jane Doe"
          id="name"
          onTextInputChange={onChange}
          {...args}
        />

        <Select
          label="Country"
          placeholder="Select a country"
          onSelectionChange={onChange}
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

      <Radio name="Gender" onRadioChange={onChange} horizontal {...args}>
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
        onSliderChange={onChange}
        min={0}
        max={50}
        defaultValue={15}
        {...args}
      />

      <div style={{ display: 'grid', gap: '1.5rem', width: '30rem' }}>
        <Switch
          label="Dark Mode"
          id="switch"
          onSwitchChange={onChange}
          {...args}
        />
        <Switch
          label="Notifications"
          id="switch-two"
          onSwitchChange={onChange}
          {...args}
        />
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Tag {...args} color="error">
          A tag
        </Tag>
        <Tag {...args} color="neutral">
          Another tag
        </Tag>
        <Tag {...args}>Third tag</Tag>
        <Tag {...args} color="warning">
          Four tags
        </Tag>

        <Tag.Add
          {...args}
          id="tag-add"
          placeholder="New Tag"
          onAdd={onAddTag}
          {...args}
        />
      </div>

      <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
        <Button onButtonClick={onButtonClick} {...args}>
          Submit
        </Button>

        <Checkbox
          id="checkbox"
          label="I want to recieve newsletters"
          onCheckboxChange={onChange}
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
