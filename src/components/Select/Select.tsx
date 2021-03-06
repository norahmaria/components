import React, { useState, useEffect, useRef } from 'react'
import './Select.scss'

import useOutsideClick from '../../hooks/useOutsideClick'
import useOnKeyDown from './hooks/useOnKeyDown'

import Group from './Components/Group'
import ExtendedOption from './Components/Private/ExtendedOption'
import Button from './Components/Private/Button'

import SelectProps from './Select.types'

const Select = ({
  multiple = false,
  required = false,
  disabled = false,
  label,
  placeholder,
  onSelectionChange,
  status,
  defaultValue = [],
  size = 'medium',
  color = 'primary',
  className,
  style,
  ...props
}: SelectProps) => {
  const [selected, setSelected] =
    useState<(string | number)[]>(defaultValue)

  const [isOpen, setIsOpen] = useState(false)
  const container = useRef<HTMLDivElement>(null)
  const didMountRef = useRef(false)

  const onKeyDown = useOnKeyDown({
    updateSelected,
    setSelected,
    setIsOpen,
    multiple,
  })

  useOutsideClick(container, '.select', () => setIsOpen(false))

  useEffect(() => {
    if (didMountRef.current) onSelectionChange(selected)

    didMountRef.current = true
  }, [selected])

  function updateSelected(value: number | string) {
    setSelected(prev => {
      let modify = [...prev]
      const selectedIndex = modify.indexOf(value)

      if (multiple) {
        selectedIndex > -1
          ? modify.splice(selectedIndex, 1)
          : modify.push(value)
      } else {
        if (modify[0] === value) {
          modify = []
        } else {
          modify = [value]
        }
      }

      return modify
    })
  }

  const createProps = (value: string | number, disabled?: boolean) => {
    return {
      tabIndex: disabled ? -1 : isOpen ? (disabled ? -1 : 0) : -1,
      selected: selected.includes(value),
      onKeyDown: onKeyDown(value),
      onClick: () => {
        if (!disabled) {
          updateSelected(value)
          if (!multiple) setIsOpen(false)
        }
      },
    }
  }

  const clear = () => {
    setSelected([])
    setTimeout(() => setIsOpen(required))
  }

  return (
    <div
      data-testid="select"
      ref={container}
      style={style}
      className={`
        select-nm 
        size-${size} 
        color-${color} 
        ${status && status.type ? status.type : ''} 
        ${className}
      `}>
      <label className={`form-label-nm disabled-${disabled}`}>
        {label}
      </label>

      <Button
        color={color}
        isOpen={isOpen}
        multiple={multiple}
        selected={selected}
        disabled={disabled}
        status={status}
        size={size}
        label={label}
        placeholder={placeholder}
        labelChildren={props.children}
        onClick={() => setIsOpen(prev => !prev)}
        onKeyDown={e =>
          e.key === 'Backspace' ? setSelected([]) : () => {}
        }
        clear={clear}
      />

      <ul
        className={`options-nm open-${isOpen}`}
        role="listbox"
        aria-label={label}
        aria-multiselectable={multiple}
        aria-activedescendant={selected[selected.length]?.toString()}
        tabIndex={-1}>
        {React.Children.count(props.children) ? (
          React.Children.map(props.children, child => {
            if (React.isValidElement(child)) {
              if (child.props.title) {
                return (
                  <Group {...child.props}>
                    {React.Children.map(child.props.children, nested => (
                      <ExtendedOption
                        {...nested.props}
                        {...createProps(
                          nested.props.value,
                          nested.props.disabled
                        )}
                      />
                    ))}
                  </Group>
                )
              } else {
                return (
                  <ExtendedOption
                    {...child.props}
                    {...createProps(
                      child.props.value,
                      child.props.disabled
                    )}
                  />
                )
              }
            }
          })
        ) : (
          <div>No selects </div>
        )}
      </ul>

      {status && (
        <div id="error" className="status-nm">
          {status.message}
        </div>
      )}
    </div>
  )
}

export default Select
