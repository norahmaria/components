interface TextInputProps {
  label: string
  placeholder: string
  id: string

  size?: 'small' | 'medium' | 'large'
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  round?: boolean
  icon?: JSX.Element | string

  onTextInputChange: (value: string) => any

  status?: {
    type: 'warning' | 'error'
    message: string
  } | null
  disabled?: boolean
  isLoading?: boolean

  characterLimit?: number

  password?: boolean
  textarea?: boolean
}
interface TextInputAriaProps extends TextInputProps {
  password: true
  textarea?: false
}
interface TextInputPropsNonAria extends TextInputProps {
  password?: false
  textarea?: boolean
}

type Props = TextInputProps & (TextInputAriaProps | TextInputPropsNonAria)

export default Props
