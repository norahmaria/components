import { CSSProperties } from 'react'

export type CustomColor = {
  background: string
  borderColor: string
  color: string
}

interface TagProps {
  /** Function to run when user clicks the delete icon (only visible if a function is set) */
  onDelete?: (e: React.MouseEvent<SVGSVGElement, MouseEvent>) => any
  /** Function to run when user clicks the tag (only visible if a function is set) */
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => any

  /** Use rounded corners on the tag */
  round?: boolean
  /** Use rounded corners on the tag */
  disabled?: boolean

  /** The color scheme of the tag, either a preset or a custom color which is an object that needs `borderColor`, `color` and `background. */
  color?:
    | 'primary'
    | 'neutral'
    | 'success'
    | 'warning'
    | 'error'
    | CustomColor
  /** The size of the tag */
  size?: 'small' | 'medium' | 'large'
  /** Add custom className */
  className?: string
  /** Add inline styling */
  style?: CSSProperties

  /** The text on the tag */
  children: string
  /** Include an icon */
  icon?: JSX.Element | string
}

export default TagProps
