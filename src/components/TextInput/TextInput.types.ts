import { CSSProperties } from 'react'

interface TextInputProps {
  /** The text input label */
  label: string
  /** The placeholder text */
  placeholder: string
  /** The unique id to use for the input and for the label for attribute */
  id: string
  /** The function to call when text input changes, the parameter will give you the value of the input */
  onTextInputChange: (
    value: string,
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => any

  /** The size of the input */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the input */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  /** Use rounded corners on the input or not */
  round?: boolean
  /** Icon for the input */
  icon?: JSX.Element | string

  /** Set input to be disabled or not */
  disabled?: boolean
  /** Is the input loading or not */
  isLoading?: boolean

  /** Error or warning messages */
  status?: {
    type: 'warning' | 'error'
    message: string
  } | null

  /** Set a character limit for the input */
  characterLimit?: number
  /** If it's a password input or not */
  password?: boolean
  /** If it's a textarea or a normal text input */
  textarea?: boolean

  /** The default value */
  defaultValue?: string
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
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
