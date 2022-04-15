interface ButtonProps {
  isOpen: boolean
  multiple: boolean
  selected: (string | number)[]
  labelChildren: React.ReactNode
  label: string
  placeholder: string
  disabled: boolean
  required: boolean
  status: {
    type: 'error' | 'warning'
    message: string
  }
  onClick: () => void
  clear: () => void
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => any
}

export default ButtonProps
