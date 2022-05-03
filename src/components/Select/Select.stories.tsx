import { Meta, Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'

import React from 'react'
import useForm from '../../hooks/useForm'

import { Select as SelectComponent } from '../'
import SelectProps from './Select.types'

import createArgTypesCategoryAndControls from '../../utils/storybook/getArgTypes'
import Categories from '../../utils/storybook/categories'

import { ReactComponent as UnitedArabEmirates } from '../../assets/Flags/AE.svg'
import { ReactComponent as Afghanistan } from '../../assets/Flags/AF.svg'
import { ReactComponent as Albania } from '../../assets/Flags/AL.svg'
import { ReactComponent as Armenia } from '../../assets/Flags/AM.svg'
import { ReactComponent as Argentina } from '../../assets/Flags/AR.svg'
import { ReactComponent as Austria } from '../../assets/Flags/AT.svg'
import { ReactComponent as Australia } from '../../assets/Flags/AU.svg'
import { ReactComponent as Aruba } from '../../assets/Flags/AW.svg'
import { ReactComponent as Azerbaijan } from '../../assets/Flags/AZ.svg'
import { ReactComponent as BosniaAndHerzegovina } from '../../assets/Flags/BA.svg'
import { ReactComponent as Barbados } from '../../assets/Flags/BB.svg'
import { ReactComponent as Bangladesh } from '../../assets/Flags/BD.svg'
import { ReactComponent as Belgium } from '../../assets/Flags/BE.svg'

import { ReactComponent as Norway } from '../../assets/Flags/NO.svg'
import { ReactComponent as UnitedStates } from '../../assets/Flags/US.svg'
import { ReactComponent as Sweden } from '../../assets/Flags/SE.svg'

const code = `<Select
  label="Country"
  placeholder="Select"
  onSelectionChange={selected => {
    action('onSelectionChange')(selected)
  }}>
  {commonOptions.map(option => (
    <Select.Option leftIcon={<option.Icon />} value={option.id}>
      {option.title}
    </Select.Option>
  ))}

  {optionGroups.map(group => (
    <Select.Group title={group.title}>
      {group.options.map(option => (
        <Select.Option leftIcon={<option.Icon />} value={option.id}>
          {option.title}
        </Select.Option>
      ))}
    </Select.Group>
  ))}

  {unsortedOptions.map(option => (
    <Select.Option leftIcon={<option.Icon />} value={option.id}>
      {option.title}
    </Select.Option>
  ))}
</Select>`

export default {
  title: 'Inputs/Select',
  component: SelectComponent,
  subcomponents: {
    'Select.Group': SelectComponent.Group,
    'Select.Option': SelectComponent.Option,
  },
  parameters: {
    badges: [BADGE.NEEDS_REVISION, BADGE.EXPERIMENTAL],
    a11y: {
      config: {
        rules: [
          {
            id: 'scrollable-region-focusable',
            enabled: false,
          },
        ],
      },
    },
    docs: {
      source: {
        code,
        language: 'jsx',
      },
    },
  },
  argTypes: createArgTypesCategoryAndControls({
    onChange: [Categories.Actions],
    label: [Categories.Display],
    children: [Categories.Display, true],
    status: [Categories.Display],
    disabled: [Categories.State],
    value: [Categories.State, true],
  }),
} as Meta

const SelectStory: Story<SelectProps> = args => {
  const { onSelectionChange } = useForm({ select: [] })
  return (
    <SelectComponent
      {...args}
      id="select"
      onChange={selected => {
        onSelectionChange(true)(selected)
        action('onChange')(selected)
      }}>
      <SelectComponent.Option leftIcon={<UnitedStates />} value="us">
        United States
      </SelectComponent.Option>
      <SelectComponent.Option leftIcon={<Australia />} value="au">
        Australia
      </SelectComponent.Option>
      <SelectComponent.Option leftIcon={<Barbados />} value="bb">
        Barbados
      </SelectComponent.Option>

      <SelectComponent.Group title="Europe">
        <SelectComponent.Option leftIcon={<Norway />} value="no">
          Norway
        </SelectComponent.Option>
        <SelectComponent.Option disabled leftIcon={<Sweden />} value="se">
          Sweden
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<Albania />} value="al">
          Albania
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<Austria />} value="at">
          Austria
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<BosniaAndHerzegovina />} value="ba">
          Bosnia And Herzegovina
        </SelectComponent.Option>
      </SelectComponent.Group>

      <SelectComponent.Group title="Asia">
        <SelectComponent.Option leftIcon={<UnitedArabEmirates />} value="ae">
          United Arab Emirates
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<Afghanistan />} value="af">
          Afghanistan
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<Armenia />} value="am">
          Armenia
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<Azerbaijan />} value="az">
          Azerbaijan
        </SelectComponent.Option>
        <SelectComponent.Option leftIcon={<Bangladesh />} value="bd">
          Bangladesh
        </SelectComponent.Option>
      </SelectComponent.Group>

      <SelectComponent.Option leftIcon={<Argentina />} value="ar">
        Argentina
      </SelectComponent.Option>

      <SelectComponent.Option leftIcon={<Aruba />} value="aw">
        Aruba
      </SelectComponent.Option>

      <SelectComponent.Option value="be" leftIcon={<Belgium />}>
        Belgium
      </SelectComponent.Option>
    </SelectComponent>
  )
}

export const Select: Story<SelectProps> = SelectStory.bind({})
Select.args = {
  label: 'Country',
  placeholder: 'Select',
  children: null,
  status: null,
  multiple: false,
  required: false,
  disabled: false,
  size: 'medium',
  color: 'primary',
  className: '',
}
