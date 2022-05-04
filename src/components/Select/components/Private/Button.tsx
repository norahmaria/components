import React, { useState } from 'react'
import ButtonProps from './Button.types'

import { ReactComponent as ArrowIcon } from '../../../../assets/Arrow_Down.svg'
import { ReactComponent as CloseIcon } from '../../../../assets/Close.svg'
import { ReactComponent as ErrorIcon } from '../../../../assets/Error.svg'
import { ReactComponent as WarningIcon } from '../../../../assets/Warning.svg'

import Label from './Label'

const Button = ({
  isOpen,
  multiple,
  selected,
  labelChildren,
  placeholder,
  disabled,
  status,
  onClick,
  size,
  clear,
  onKeyDown,
  color,
}: ButtonProps) => {
  const [hover, setHover] = useState(false)

  return (
    <button
      type="button"
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`
        select-btn-nm
        input-base-nm
        open-${isOpen} 
        size-${size} 
        color-${color}
        includes-tags-${!!(multiple && selected.length)}
        ${status && status.type ? status.type : ''} 
      `}
      aria-haspopup="listbox"
      aria-errormessage="error"
      aria-disabled={disabled}
      aria-invalid={!!status}
      aria-expanded={isOpen}
      disabled={disabled}
      onClick={onClick}
      onKeyDown={onKeyDown}>
      <Label
        children={labelChildren}
        selected={selected}
        multiple={multiple}
        placeholder={placeholder}
      />

      {selected.length && hover ? (
        <CloseIcon
          data-testid="close-icon"
          role="button"
          aria-label="Clear selected"
          className="close-icon-nm"
          onClick={clear}
        />
      ) : status?.type === 'error' ? (
        <ErrorIcon className="error-icon-nm" aria-label={status.message} />
      ) : status?.type === 'warning' ? (
        <WarningIcon className="warning-icon-nm" aria-label={status.message} />
      ) : (
        <ArrowIcon className="arrow-icon-nm" aria-label="Open / Close" />
      )}
    </button>
  )
}

export default Button
