import Props from '../../types/Props'

interface SwitchProps extends Props {
  /** The switch label */
  label: string
  /** The unique id to use for the switch and for the label for attribute */
  id: string
  /** The function to call when the switch changes */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any

  /** Set input to be disabled or not */
  disabled?: boolean

  /** The value of the switch */
  value: boolean
}

export default SwitchProps
