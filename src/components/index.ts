export { default as Button } from './Button/Button'
export { default as Checkbox } from './Checkbox/Checkbox'

import RadioComponent from './Radio/Radio'
import RadioProps from './Radio/Radio.types'

import RadioButton from './Radio/Components/Button'
import RadioButtonProps from './Radio/Components/Button.types'

type RadioWithChildren = React.FC<RadioProps> & {
  Button: React.FC<RadioButtonProps>
}

const Radio: RadioWithChildren = RadioComponent as RadioWithChildren
Radio.Button = RadioButton

export { Radio }

import SelectComponent from './Select/Select'
import Option from './Select/components/Option'
import Group from './Select/components/Group'

import SelectProps from './Select/Select.types'
import OptionProps from './Select/components/Option.types'
import GroupProps from './Select/components/Group.types'

type SelectWithChildren = React.FC<SelectProps> & {
  Option: React.FC<OptionProps>
  Group: React.FC<GroupProps>
}

const Select: SelectWithChildren = SelectComponent as SelectWithChildren
Select.Option = Option
Select.Group = Group

export { Select }
