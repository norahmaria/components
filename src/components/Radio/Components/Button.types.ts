interface ButtonProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  id: string
  disabled?: boolean
  label: string
  labelPlacement?: 'left' | 'right' | 'top' | 'buttom'
}

export default ButtonProps
