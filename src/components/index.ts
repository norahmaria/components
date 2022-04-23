import '../scss/index.scss'

export { default as Button } from './Button/Button'
export { default as Checkbox } from './Checkbox/Checkbox'
export { default as TextInput } from './TextInput/TextInput'
export { default as Switch } from './Switch/Switch'
export { default as Slider } from './Slider/Slider'
export { default as Tag } from './Tag/Tag'

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
import Option from './Select/Components/Option'
import Group from './Select/Components/Group'

import SelectProps from './Select/Select.types'
import OptionProps from './Select/Components/Option.types'
import GroupProps from './Select/Components/Group.types'

type SelectWithChildren = React.FC<SelectProps> & {
  Option: React.FC<OptionProps>
  Group: React.FC<GroupProps>
}

const Select: SelectWithChildren = SelectComponent as SelectWithChildren
Select.Option = Option
Select.Group = Group

export { Select }
