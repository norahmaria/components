import { Story } from '@storybook/react'
import React from 'react'

import { Select as SelectComponent } from '../../components'
import SelectProps from './Select.types'

import hideControls from '../../helpers/storybook/hideControls'

import { ReactComponent as Andorra } from '../../assets/Flags/AD.svg'
import { ReactComponent as UnitedArabEmirates } from '../../assets/Flags/AE.svg'
import { ReactComponent as Afghanistan } from '../../assets/Flags/AF.svg'
import { ReactComponent as AntiguaAndBarbuda } from '../../assets/Flags/AG.svg'
import { ReactComponent as Albania } from '../../assets/Flags/AL.svg'
import { ReactComponent as Armenia } from '../../assets/Flags/AM.svg'
import { ReactComponent as NetherlandsAntilles } from '../../assets/Flags/AN.svg'
import { ReactComponent as Angola } from '../../assets/Flags/AO.svg'
import { ReactComponent as Argentina } from '../../assets/Flags/AR.svg'
import { ReactComponent as Austria } from '../../assets/Flags/AT.svg'
import { ReactComponent as Australia } from '../../assets/Flags/AU.svg'
import { ReactComponent as Aruba } from '../../assets/Flags/AW.svg'
import { ReactComponent as Azerbaijan } from '../../assets/Flags/AZ.svg'
import { ReactComponent as BosniaAndHerzegovina } from '../../assets/Flags/BA.svg'
import { ReactComponent as Barbados } from '../../assets/Flags/BB.svg'
import { ReactComponent as Bangladesh } from '../../assets/Flags/BD.svg'
import { ReactComponent as Belgium } from '../../assets/Flags/BE.svg'
import { ReactComponent as BurkinaFaso } from '../../assets/Flags/BF.svg'
import { ReactComponent as Bulgaria } from '../../assets/Flags/BG.svg'
import { ReactComponent as TheBahamas } from '../../assets/Flags/BH.svg'
import { ReactComponent as Burundi } from '../../assets/Flags/BI.svg'

import { ReactComponent as Norway } from '../../assets/Flags/NO.svg'
import { ReactComponent as UnitedStates } from '../../assets/Flags/US.svg'
import { ReactComponent as Sweden } from '../../assets/Flags/SE.svg'

const hiddenProperties = hideControls(['style'])

export default {
  title: 'Select',
  argTypes: {
    multiple: {
      description: 'Allow for multi select',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    required: {
      description: 'Set select to be required or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Set select to be disabled or not',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    size: {
      description: 'The size of the select',
      table: {
        type: { summary: 'small | medium | large' },
        defaultValue: { summary: 'medium' },
      },
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    label: {
      description: 'The select label',
      table: {
        type: { summary: 'string' },
      },
    },
    onSelectionChange: {
      description:
        'The function to call when selection changes, the parameter will give you the value of the selected item(s)',
      table: {
        type: { summary: '(selected: (string | number)[]) => void' },
      },
    },
    children: {
      description: `The component expects you to use Select.Option or Select.Group as it's children`,
      table: {
        type: {
          summary: `custom`,
        },
      },
    },
    status: {
      description: 'Error or warning messages',
      table: {
        type: {
          summary: `{
          type: 'warning' | 'error'
          message: string
        } | null`,
        },
      },
      control: {
        type: 'object',
      },
    },
    ...hiddenProperties,
  },
}

const SelectStory: Story<SelectProps> = args => (
  <SelectComponent {...args} onSelectionChange={() => {}}>
    <SelectComponent.Option leftIcon={<UnitedStates />} value="us">
      United States
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

    <SelectComponent.Option leftIcon={<Andorra />} value="ad">
      Andorra
    </SelectComponent.Option>
    <SelectComponent.Option leftIcon={<AntiguaAndBarbuda />} value="ag">
      Antigua And Barbuda
    </SelectComponent.Option>

    <SelectComponent.Option leftIcon={<NetherlandsAntilles />} value="an">
      Netherlands Antilles
    </SelectComponent.Option>
    <SelectComponent.Option leftIcon={<Angola />} value="ao">
      Angola
    </SelectComponent.Option>
    <SelectComponent.Option leftIcon={<Argentina />} value="ar">
      Argentina
    </SelectComponent.Option>

    <SelectComponent.Option leftIcon={<Australia />} value="au">
      Australia
    </SelectComponent.Option>
    <SelectComponent.Option leftIcon={<Aruba />} value="aw">
      Aruba
    </SelectComponent.Option>

    <SelectComponent.Option leftIcon={<Barbados />} value="bb">
      Barbados
    </SelectComponent.Option>
    <SelectComponent.Option value="be" leftIcon={<Belgium />}>
      Belgium
    </SelectComponent.Option>
    <SelectComponent.Option value="bf" leftIcon={<BurkinaFaso />}>
      Burkina Faso
    </SelectComponent.Option>
    <SelectComponent.Option value="bg" leftIcon={<Bulgaria />}>
      Bulgaria
    </SelectComponent.Option>
    <SelectComponent.Option value="bh" leftIcon={<TheBahamas />}>
      The Bahamas
    </SelectComponent.Option>
    <SelectComponent.Option value="bi" leftIcon={<Burundi />}>
      Burundi
    </SelectComponent.Option>
  </SelectComponent>
)

export const Select: Story<SelectProps> = SelectStory.bind({})
Select.args = {
  label: 'Country',
  onSelectionChange: change => {
    console.log(change)
  },
  multiple: false,
  size: 'medium',
  style: { width: '18rem' },
  required: false,
  disabled: false,
}
