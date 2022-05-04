interface ButtonProps {
  isOpen: boolean
  multiple: boolean
  selected: (string | number)[]
  labelChildren: React.ReactNode
  placeholder: string
  disabled: boolean
  status: {
    type: 'error' | 'warning'
    message: string
  }
  onClick: () => void
  clear: () => void
  onKeyDown: (e: React.KeyboardEvent<HTMLButtonElement>) => any
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  size: 'small' | 'medium' | 'large'
}

export default ButtonProps
