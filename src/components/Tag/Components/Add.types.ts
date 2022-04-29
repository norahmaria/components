import Props from '../../../types/Props'

interface AddProps extends Props {
  /** The placeholder text */
  placeholder: string
  /** The unique id to use for the input */
  id: string
  /** The function to call when text input is submitted, the parameter will give you the value of the input and the keyboard event */
  onAdd: (value: string, e: React.KeyboardEvent<HTMLInputElement>) => any

  /** Use rounded corners on the input or not */
  round?: boolean

  /** Set input to be disabled or not */
  disabled?: boolean
  /** Is the input loading or not */
  isLoading?: boolean

  /** Set a character limit for the input */
  characterLimit?: number
}

export default AddProps
