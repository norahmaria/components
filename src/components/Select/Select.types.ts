import OptionProps from './components/Option.types'
import GroupProps from './components/Option.types'

interface SelectProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  multiple?: boolean
  required?: boolean
  disabled?: boolean
  size?: 'small' | 'medium' | 'large'
  status?: {
    type: 'warning' | 'error'
    message: string
  } | null
  label: string
  onSelectionChange: (selected: (string | number)[]) => void
  // children?: (React.ReactElement<OptionProps> | React.ReactElement<GroupProps>)[]
}

export default SelectProps
