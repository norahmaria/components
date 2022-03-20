import OptionProps from './Option.types'

interface GroupProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  title: string
  children?: React.ReactElement<OptionProps>[]
}

export default GroupProps
