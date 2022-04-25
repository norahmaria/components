import { CSSProperties } from 'react'

interface Props {
  /** The size of the component */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the component */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error'

  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
}

export default Props
