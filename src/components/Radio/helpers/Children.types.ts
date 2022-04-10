interface ChildrenProps {
  children: any
  name: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  size: 'small' | 'medium' | 'large'
  color: 'primary' | 'neutral' | 'success' | 'warning' | 'error'
  labelPlacement: 'left' | 'right' | 'top' | 'bottom'
  disabled: boolean
}

export default ChildrenProps
