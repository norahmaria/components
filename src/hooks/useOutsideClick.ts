import type { RefObject } from 'react'
import { useEffect, useState } from 'react'

const useOutsideClick = (
  ref: RefObject<HTMLDivElement>,
  exception?: string
) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      const el = ref?.current
      const { target } = e

      if (!el || !target) return

      if (
        el.contains(e.target as Node) ||
        (exception && (target as HTMLElement).closest(exception))
      )
        return

      setOpen(false)
    }

    document.addEventListener('mousedown', handler)

    return () => {
      document.removeEventListener('mousedown', handler)
    }
  }, [ref, exception])

  return {
    open,
    setOpen,
  }
}

export default useOutsideClick
