import React, { useState, useEffect, useRef } from 'react'
import './Select.scss'

import useOutsideClick from '../../hooks/useOutsideClick'
import { ReactComponent as ArrowIcon } from '../../assets/Arrow_Down.svg'
import { ReactComponent as CloseIcon } from '../../assets/Close.svg'
import { ReactComponent as ErrorIcon } from '../../assets/Error.svg'
import { ReactComponent as WarningIcon } from '../../assets/Warning.svg'
import { ReactComponent as InboxIcon } from '../../assets/Inbox.svg'

import SelectProps from './Select.types'
import Children from './helpers/Children'

// TODO:
// Style actual multiselected shit
// Additional label for accessibility

// Required
// Searching
// Add new items to select
// Copy Paste
// Clearing one by one
// Navigate with key up and down

const Select: React.FC<SelectProps> = ({
  multiple = false,
  required = false,
  disabled = false,
  label,
  onSelectionChange,
  status,
  size = 'medium',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState<(string | number)[]>([])
  const container = useRef<HTMLDivElement>(null)

  const toggleOptions = () => setIsOpen(prev => !prev)
  useOutsideClick(container, '.select', () => setIsOpen(false))
  useEffect(() => onSelectionChange(selected), [selected])

  const updateSelected = (value: number | string) => {
    setSelected(prev => {
      let modify = [...prev]
      const selectedIndex = modify.indexOf(value)

      if (multiple) {
        selectedIndex > -1 ? modify.splice(selectedIndex, 1) : modify.push(value)
      } else {
        modify = [value]
      }

      return modify
    })
  }

  return (
    <div
      className={`
        select-nm ${size} 
        ${status && status.type ? status.type : ''} 
        ${disabled ? 'disabled' : ''}
      `}
      ref={container}
      {...props}
    >
      <button
        type="button"
        className={`btn ${isOpen ? 'open' : ''}`}
        aria-haspopup="listbox"
        aria-errormessage="error"
        aria-disabled={disabled}
        disabled={disabled}
        aria-invalid={!!status}
        aria-expanded={isOpen}
        aria-required={required}
        onClick={toggleOptions}
        onKeyDown={e => {
          if (e.key === 'Backspace') setSelected([])
        }}
      >
        <div className="label">
          {selected.length ? (
            React.Children.map(props.children, child => {
              if (React.isValidElement(child)) {
                const { children, value, title } = child.props

                if (title) {
                  return React.Children.map(children, nested => {
                    if (selected.includes(nested.props.value))
                      return <div className="tag">{nested.props.children}</div>
                  })
                } else if (selected.includes(value)) {
                  return <div className="tag">{children}</div>
                }
              }
            })
          ) : (
            <div className="placeholder">{label}</div>
          )}
        </div>

        {status?.type === 'error' ? (
          <ErrorIcon className="error-icon" />
        ) : status?.type === 'warning' ? (
          <WarningIcon className="warning-icon" />
        ) : selected.length ? (
          <CloseIcon
            className="close-icon"
            onClick={() => {
              setSelected([])
              setTimeout(() => setIsOpen(required))
            }}
          />
        ) : (
          <ArrowIcon className="arrow-icon" />
        )}
      </button>

      <ul
        className={`options ${isOpen ? 'open' : ''}`}
        role="listbox"
        aria-multiselectable={multiple}
        aria-activedescendant={selected[selected.length]?.toString()}
        tabIndex={-1}
      >
        {React.Children.count(props.children) ? (
          <Children
            isOpen={isOpen}
            children={props.children}
            selected={selected}
            updateSelected={updateSelected}
            multiple={multiple}
            setIsOpen={setIsOpen}
            setSelected={setSelected}
          />
        ) : (
          <li className="empty">
            <InboxIcon className="inbox-icon" /> No options
          </li>
        )}
      </ul>

      {status && (
        <div id="error" className="status">
          {status.message}
        </div>
      )}
    </div>
  )
}

export default Select
