import React from 'react'
import ChildrenProps from './Children.types'

const Children = ({
  updateSelected,
  setIsOpen,
  selected,
  setSelected,
  multiple,
  isOpen,
  ...props
}: ChildrenProps) => {
  const handleKeyDown =
    (value: number | string) => (e: React.KeyboardEvent<HTMLLIElement>) => {
      switch (e.key) {
        case ' ':
        case 'SpaceBar':
        case 'Enter':
          e.preventDefault()
          updateSelected(value)
          if (!multiple) setIsOpen(false)
          break
        case 'Escape':
          setIsOpen(false)
          break
        case 'Backspace':
          setSelected([])
          break
        default:
          break
      }
    }

  return (
    <>
      {React.Children.map(props.children, child => {
        if (React.isValidElement(child)) {
          if (child.props.title) {
            return React.cloneElement(child, {
              children: React.Children.map(child.props.children, nested => {
                const { value, disabled } = nested.props

                return React.cloneElement(nested, {
                  'aria-selected': selected.includes(value),
                  onKeyDown: handleKeyDown(value),
                  onClick: () => {
                    if (!disabled) {
                      updateSelected(value)
                      if (!multiple) setIsOpen(false)
                    }
                  },
                  selected: selected.includes(value),
                  tabIndex: disabled ? -1 : isOpen ? 0 : -1,
                })
              }),
            })
          } else {
            const { value, disabled } = child.props

            return React.cloneElement(child, {
              'aria-selected': selected.includes(value),
              onKeyDown: handleKeyDown(value),
              onClick: () => {
                if (!disabled) {
                  updateSelected(value)
                  if (!multiple) setIsOpen(false)
                }
              },
              selected: selected.includes(value),
              tabIndex: disabled ? -1 : isOpen ? 0 : -1,
            })
          }
        }

        return child
      })}
    </>
  )
}

export default Children
