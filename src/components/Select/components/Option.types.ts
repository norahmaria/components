interface OptionProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  value: string | number
  selected?: boolean
  leftIcon?: JSX.Element | string
  rightIcon?: JSX.Element | string
  disabled?: boolean
}

export default OptionProps
