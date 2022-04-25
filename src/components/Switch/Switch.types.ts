import Props from '../../types/Props'

interface SwitchProps extends Props {
  /** The switch label */
  label: string
  /** The unique id to use for the switch and for the label for attribute */
  id: string
  /** The function to call when the switch changes, the first argument will give you the value, while the second will give you either a change event or a keyboard event. */
  onSwitchChange: (
    value: boolean,
    e:
      | React.KeyboardEvent<HTMLLabelElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => any

  /** Set input to be disabled or not */
  disabled?: boolean

  /** The default value */
  defaultValue?: boolean
}

export default SwitchProps
