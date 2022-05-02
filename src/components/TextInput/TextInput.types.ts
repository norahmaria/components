import Props from '../../types/Props'

interface TextInputProps extends Props {
  /** The text input label */
  label: string
  /** The placeholder text */
  placeholder: string
  /** The unique id to use for the input and for the label for attribute */
  id: string
  /** The function to call when text input changes */
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => any

  /** The function to clear the input */
  onDelete: () => any

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

  /** The value of the Text Input */
  value: string
}
interface TextInputAriaProps extends TextInputProps {
  password: true
  textarea?: false
}
interface TextInputPropsNonAria extends TextInputProps {
  password?: false
  textarea?: boolean
}

type CombinedProps = TextInputProps &
  (TextInputAriaProps | TextInputPropsNonAria)

export default CombinedProps
