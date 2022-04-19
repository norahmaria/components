interface SwitchProps {
  label: string

  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  onSwitchChange: (
    value: boolean,
    e:
      | React.MouseEvent<HTMLLabelElement, MouseEvent>
      | React.KeyboardEvent<HTMLLabelElement>
  ) => any
  defaultValue?: boolean
}

export default SwitchProps
