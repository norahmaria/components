import { CSSProperties } from 'react'

export type CustomColor = {
  background: string
  borderColor: string
  color: string
}

interface TagProps {
  /** The size of the tag */
  size?: 'small' | 'medium' | 'large'
  /** The color scheme of the tag */
  color?: 'primary' | 'neutral' | 'success' | 'warning' | 'error' | CustomColor
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties
  /** The text on the tag */
  children: string
  /** Function to run when user presss the delete icon (only visible if a function is set) */
  onDelete?: () => any
}

export default TagProps
