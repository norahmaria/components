import { CSSProperties } from 'react'

interface TagProps {
  /** The tag label */
  label: string
  /** Set tag to be disabled or not */
  disabled?: boolean
  /** The size of the tag */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the tag */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error' | `#${string}`
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
}

export default TagProps
