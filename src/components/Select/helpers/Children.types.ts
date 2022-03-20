import OptionProps from '../components/Option.types'
import GroupProps from '../components/Option.types'

interface ChildrenProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  selected: (string | number)[]
  updateSelected: (value: number | string) => void
  setSelected: React.Dispatch<React.SetStateAction<(string | number)[]>>
  multiple: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  isOpen: boolean
  // children?: (React.ReactElement<OptionProps> | React.ReactElement<GroupProps>)[]
}

export default ChildrenProps
