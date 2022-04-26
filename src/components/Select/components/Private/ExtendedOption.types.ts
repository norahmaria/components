import OptionProps from '../Option.types'

interface ExtendedOptionProps extends OptionProps {
  onKeyDown: any
  onClick: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => any
  selected: boolean
  tabIndex: number
}

export default ExtendedOptionProps
