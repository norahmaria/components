import React from 'react'
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
  label,
  disabled,
  required,
  status,
  onClick,
  clear,
  onKeyDown,
}: ButtonProps) => {
  return (
    <button
      type="button"
      className={`
        btn open-${isOpen} 
        includes-tags-${!!(multiple && selected.length)}
      `}
      aria-haspopup="listbox"
      aria-errormessage="error"
      aria-disabled={disabled}
      disabled={disabled}
      aria-invalid={!!status}
      aria-expanded={isOpen}
      aria-required={required}
      onClick={onClick}
      onKeyDown={onKeyDown}>
      <Label
        children={labelChildren}
        selected={selected}
        multiple={multiple}
        label={label}
      />

      {status?.type === 'error' ? (
        <ErrorIcon className="error-icon" />
      ) : status?.type === 'warning' ? (
        <WarningIcon className="warning-icon" />
      ) : selected.length ? (
        <CloseIcon
          data-testid="close-icon"
          role="button"
          aria-label="Clear selected"
          className="close-icon"
          onClick={clear}
        />
      ) : (
        <ArrowIcon className="arrow-icon" />
      )}
    </button>
  )
}

export default Button
