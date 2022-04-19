import React, { useState } from 'react'
import TextInputProps from './TextInput.types'

import { ReactComponent as ErrorIcon } from '../../assets/Error.svg'
import { ReactComponent as WarningIcon } from '../../assets/Warning.svg'
import { ReactComponent as CloseIcon } from '../../assets/Close.svg'

import './TextInput.scss'
import LoadingSpinner from '../../private/LoadingSpinner'
import growTextArea from '../../utils/growTextArea'

const TextInput = ({
  label,
  placeholder,
  onTextInputChange,
  color = 'primary',
  size = 'medium',
  round = false,
  disabled = false,
  isLoading = false,
  password = false,
  textarea = false,
  characterLimit,
  defaultValue,
  status,
  icon,
  id,
  className,
  style,
}: TextInputProps) => {
  const [value, setValue] = useState(defaultValue || '')
  const [hover, setHover] = useState(false)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(() => {
      const update =
        characterLimit && e.target.value.length > characterLimit
          ? value
          : characterLimit
          ? e.target.value.substring(0, characterLimit)
          : e.target.value

      onTextInputChange(update, e)
      return update
    })
  }

  const clear = () => setValue('')

  return (
    <div
      data-testid="text-input-wrapper"
      style={style}
      className={`
        text-input-nm 
        icon-${!!icon || !!status}
        round-${round}
        color-${color}
        size-${size}
        ${status && status.type ? status.type : ''} 
        ${className}
      `}>
      <label className="form-label-nm" htmlFor={id}>
        {label}
      </label>

      <div
        className={`
          text-input-container-nm 
          textarea-${textarea} 
          disabled-${disabled} 
          ${status && status.type ? status.type : ''}
        `}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}>
        {textarea ? (
          <textarea
            data-testid="text-input"
            autoComplete="off"
            disabled={disabled}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onKeyDown={growTextArea}
            id={id}
            className={`
              input-base-nm 
              color-${color} 
              size-${size}
              ${status && status.type ? status.type : ''}
            `}
          />
        ) : (
          <input
            data-testid="text-input"
            autoComplete="off"
            disabled={disabled}
            className={`
              input-base-nm 
              color-${color} 
              size-${size}
              ${status && status.type ? status.type : ''}
            `}
            type={password ? 'password' : 'text'}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            id={id}
          />
        )}
        {isLoading ? (
          <LoadingSpinner color={color} />
        ) : value.length && hover ? (
          <CloseIcon
            data-testid="close-icon"
            role="button"
            aria-label="Clear selected"
            className="close-icon-nm"
            onClick={clear}
          />
        ) : status?.type === 'error' ? (
          <ErrorIcon aria-label={status.message} className="error-icon-nm" />
        ) : status?.type === 'warning' ? (
          <WarningIcon aria-label={status.message} className="warning-icon-nm" />
        ) : !!icon ? (
          icon
        ) : null}
      </div>

      {characterLimit && (
        <div className="character-limit-nm">
          <p className="character-count-nm">{value.length}</p> /{' '}
          <p className="character-limit-count-nm">{characterLimit}</p>
        </div>
      )}

      {status && (
        <div id="error" className="status-nm">
          {status.message}
        </div>
      )}
    </div>
  )
}

export default TextInput
