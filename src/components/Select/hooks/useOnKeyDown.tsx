import React from 'react'

interface useOnKeyDownProps {
  updateSelected: (value: number | string) => void
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  setSelected: React.Dispatch<React.SetStateAction<(string | number)[]>>
  multiple: boolean
}

const useOnKeyDown = ({
  updateSelected,
  setIsOpen,
  setSelected,
  multiple,
}: useOnKeyDownProps) => {
  return (value: number | string) => (e: React.KeyboardEvent<HTMLLIElement>) => {
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
}

export default useOnKeyDown
