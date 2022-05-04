import { useEffect, useState, useRef } from 'react'
import useOutsideClick from '../../../hooks/useOutsideClick'
import useOnKeyDown from './useOnKeyDown'

export type Selected = (string | number)[]

const useSelect = ({ defaultValue, multiple, onChange, required, id }: any) => {
  const didMount = useRef(false)

  const [selected, setSelected] = useState<Selected>(defaultValue)

  const container = useRef<HTMLDivElement>(null)

  const { open, setOpen } = useOutsideClick(container, '.select')

  useEffect(() => {
    didMount.current ? onChange({ selected, id }) : (didMount.current = true)
  }, [selected])

  const updateSelected = (value: number | string) => {
    setSelected(prev => {
      let modify = [...prev]
      const selectedIndex = modify.indexOf(value)

      if (multiple) {
        selectedIndex > -1
          ? modify.splice(selectedIndex, 1)
          : modify.push(value)
      } else {
        return modify[0] === value ? [] : [value]
      }

      return modify
    })
  }

  const onKeyDown = useOnKeyDown({
    updateSelected,
    setSelected,
    setOpen,
    multiple,
  })

  const clear = () => {
    setSelected([])
    setTimeout(() => setOpen(required))
  }

  return {
    selected,
    setSelected,
    open,
    setOpen,
    onKeyDown,
    updateSelected,
    container,
    clear,
  }
}

export default useSelect
