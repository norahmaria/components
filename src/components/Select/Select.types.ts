interface SelectProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  multiple?: boolean
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  status?: {
    type: 'warning' | 'error'
    message: string
  } | null
  label: string
  onSelectionChange: (selected: (string | number)[]) => any
}

export default SelectProps
