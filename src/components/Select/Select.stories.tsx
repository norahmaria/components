import { Story } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { BADGE } from '@geometricpanda/storybook-addon-badges'
import React from 'react'

import { Select as SelectComponent } from '../'
import SelectProps from './Select.types'

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
  },
  argTypes: {
    onSelectionChange: {
      description:
        'The function to call when selection changes, the parameter will give you the value of the selected item(s)',
      table: {
        category: 'Actions',
      },
    },
    label: {
      description: 'The select label',
      table: {
        category: 'Display',
      },
    },
    children: {
      description:
        "The component expects you to use **Select.Option or Select.Group** as it's children. Select.Group needs a `title`, while Select.Option needs a `value` and a string as its child, which will be the title.",
      control: false,
      table: {
        category: 'Display',
      },
    },
    status: {
      description: 'Error or warning messages',
      control: {
        type: 'object',
      },
      table: {
        category: 'Display',
      },
    },
    multiple: {
      description: 'Allow for multi select',
    },
    required: {
      description:
        'Set select to be required or not, this will re-open the select whenever it is cleared',
    },
    disabled: {
      description: 'Set select to be disabled or not',
      table: {
        category: 'State',
      },
    },
    size: {
      description: 'The size of the select',
      table: {
        category: 'Appearance',
      },
    },
    color: {
      description: 'The color scheme of the Select',
      table: {
        category: 'Appearance',
      },
    },
    defaultValue: {
      description: 'The default selected value',
      table: {
        category: 'State',
      },
      control: false,
    },
    className: {
      description: 'Add custom className',
      table: {
        category: 'Extra Native Props',
      },
    },
    style: {
      description: 'Add inline styling',
      control: false,
      table: {
        category: 'Extra Native Props',
      },
    },
  },
}

const SelectStory: Story<SelectProps> = args => (
  <SelectComponent
    {...args}
    onSelectionChange={selected => {
      action('onSelectionChange')(selected)
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

export const Select: Story<SelectProps> = SelectStory.bind({})
Select.args = {
  onSelectionChange: change => {},
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
